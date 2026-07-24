"""
Module 12 Verification Tests
Tests Criminal Network Analysis service and 3D graph visualization endpoints.
"""

import pytest
import pytest_asyncio
from fastapi.testclient import TestClient
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from app.main import app
from app.db.base_class import Base
from app.db.session import get_db
from app.schemas.network import NetworkGraphRequest, NetworkGraphResponse
from app.services.network_service import network_service

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
async def test_network_analysis_service(override_get_db):
    """Verify Network Analysis Service builds 3D nodes and calculates centralities."""
    async for db in app.dependency_overrides[get_db]():
        req = NetworkGraphRequest(depth=2)
        graph = await network_service.generate_network_graph(db, req)

        assert isinstance(graph, NetworkGraphResponse)
        assert len(graph.nodes) > 0
        assert len(graph.edges) > 0
        assert len(graph.critical_nodes) > 0

        # Check 3D position coordinates on node
        node = graph.nodes[0]
        assert len(node.pos) == 3
        assert isinstance(node.pos[0], float)


@pytest.mark.asyncio
async def test_network_api_endpoints(override_get_db):
    """Verify GET and POST /api/network API endpoints."""
    get_resp = client.get("/api/network")
    assert get_resp.status_code == 200
    get_data = get_resp.json()
    assert "nodes" in get_data
    assert "edges" in get_data
    assert "critical_nodes" in get_data

    post_resp = client.post("/api/network/analyze", json={"depth": 3})
    assert post_resp.status_code == 200
    assert post_resp.json()["total_connections"] >= 0
