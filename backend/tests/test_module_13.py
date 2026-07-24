"""
Module 13 Verification Tests
Tests Report Generation service and report download endpoints.
"""

import pytest
import pytest_asyncio
from fastapi.testclient import TestClient
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from app.main import app
from app.db.base_class import Base
from app.db.session import get_db
from app.schemas.report import ReportGenerationRequest, ReportGenerationResponse
from app.services.report_service import report_service

client = TestClient(app)


@pytest_asyncio.fixture
async def override_get_db():
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async def _get_db():
        async with async_session() as session:
            try:
                yield session
                await session.commit()
            except Exception:
                await session.rollback()
                raise

    app.dependency_overrides[get_db] = _get_db
    yield
    app.dependency_overrides.clear()
    await engine.dispose()


@pytest.mark.asyncio
async def test_report_service(override_get_db):
    """Verify Report Generation Service produces valid markdown report payload."""
    async for db in app.dependency_overrides[get_db]():
        req = ReportGenerationRequest(
            title="Koramangala Vehicle Theft Briefing",
            report_type="briefing",
            fir_number="FIR-2024-BLR-0091",
            suspect_name="Ramesh Alias Guja",
        )
        report = await report_service.generate_report(db, req)

        assert isinstance(report, ReportGenerationResponse)
        assert report.report_id.startswith("REP_")
        assert "KARNATAKA STATE POLICE" in report.content_markdown
        assert "Ramesh Alias Guja" in report.content_markdown
        assert report.download_url != ""


@pytest.mark.asyncio
async def test_report_api_endpoints(override_get_db):
    """Verify POST /api/report and GET /api/report/download endpoints."""
    # 1. Generate Report
    resp = client.post(
        "/api/report",
        json={
            "title": "Cyber Forensic Analysis Report",
            "report_type": "cyber_forensic",
            "fir_number": "FIR-2024-BLR-0888",
        },
    )
    assert resp.status_code == 201
    data = resp.json()
    assert "report_id" in data
    assert "download_url" in data

    download_url = data["download_url"]
    file_name = download_url.split("/")[-1]

    # 2. Download Report
    down_resp = client.get(f"/api/report/download/{file_name}")
    assert down_resp.status_code == 200
    assert "KARNATAKA STATE POLICE" in down_resp.text
