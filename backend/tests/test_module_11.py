"""
Module 11 Verification Tests
Tests REST API endpoints: Auth, Chat, RAG Search, Cases, Criminals, Upload, Vector Indexing.
"""

import io
import pytest
import pytest_asyncio
from fastapi.testclient import TestClient
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from app.main import app
from app.db.base_class import Base
from app.db.session import get_db

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
async def test_rest_apis_auth_and_cases(override_get_db):
    """Verify Authentication and Case REST API endpoints."""
    # 1. Register User
    reg_resp = client.post(
        "/api/auth/register",
        json={
            "email": "pi.gowda@ksp.gov.in",
            "password": "Password123!",
            "full_name": "Gowda PI",
            "badge_number": "KSP-99001",
            "rank": "Inspector",
            "role": "admin",
        },
    )
    assert reg_resp.status_code == 201
    reg_data = reg_resp.json()
    assert reg_data["email"] == "pi.gowda@ksp.gov.in"

    # 2. Login User
    login_resp = client.post(
        "/api/auth/login",
        json={"email": "pi.gowda@ksp.gov.in", "password": "Password123!"},
    )
    assert login_resp.status_code == 200
    token_data = login_resp.json()
    assert "access_token" in token_data
    token = token_data["access_token"]

    # 3. Get User Profile (/auth/me)
    me_resp = client.get("/api/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert me_resp.status_code == 200
    assert me_resp.json()["full_name"] == "Gowda PI"

    # 4. Create FIR Case
    case_resp = client.post(
        "/api/cases",
        json={
            "fir_number": "FIR-2024-BLR-0888",
            "district_name": "Bengaluru City",
            "police_station_name": "Halasuru PS",
            "crime_head_name": "Cyber Crime",
            "act_section": "IT Act 66C",
            "brief_facts": "Identity theft and unauthorized card cloning",
            "status": "Active",
        },
        headers={"Authorization": f"Bearer {token}"},
    )
    assert case_resp.status_code == 201
    assert case_resp.json()["fir_number"] == "FIR-2024-BLR-0888"

    # 5. List Cases
    list_resp = client.get("/api/cases?query=card")
    assert list_resp.status_code == 200
    assert list_resp.json()["success"] is True

    # 6. Get Case Detail
    detail_resp = client.get("/api/cases/FIR-2024-BLR-0888")
    assert detail_resp.status_code == 200
    assert detail_resp.json()["police_station_name"] == "Halasuru PS"


@pytest.mark.asyncio
async def test_rest_apis_chat_and_rag(override_get_db):
    """Verify Chat RAG, Vector Search, and Legacy endpoints."""
    # 1. RAG Search API
    search_resp = client.post("/api/rag/search", json={"query": "card cloning", "top_k": 3})
    assert search_resp.status_code == 200
    assert "results" in search_resp.json()

    # 2. Chat API (Full RAG Pipeline)
    chat_resp = client.post(
        "/api/chat",
        json={"prompt": "Analyze cyber theft patterns in Halasuru", "session_id": "sess-api-01"},
    )
    assert chat_resp.status_code == 200
    chat_data = chat_resp.json()
    assert "text" in chat_data
    assert "confidence" in chat_data

    # 3. Legacy Gemini Endpoint Proxy
    legacy_resp = client.post("/api/gemini/analyze", json={"prompt": "Analyze theft patterns"})
    assert legacy_resp.status_code == 200
    assert "text" in legacy_resp.json()

    # 4. Upload API
    file_bytes = io.BytesIO(b"FIR_No,Brief_Facts\nFIR-999,Test case upload")
    upload_resp = client.post(
        "/api/upload",
        files={"file": ("test_upload.csv", file_bytes, "text/csv")},
    )
    assert upload_resp.status_code == 201
    assert upload_resp.json()["status"] == "pending"
