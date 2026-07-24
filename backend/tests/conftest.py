"""
Crime Intelligence Platform — Test Configuration & Shared Fixtures

Provides shared pytest async database sessions, authenticated HTTP test clients,
and sample crime dataset fixtures for full integration testing.
"""

import io
import pytest
import pytest_asyncio
from fastapi.testclient import TestClient
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.db.session import get_db
from app.db.base_class import Base
from app.main import app
from app.models.user import User
from app.models.crime import CaseMaster, Accused, District, PoliceStation


@pytest_asyncio.fixture
async def async_engine():
    """Create async in-memory SQLite database engine for testing."""
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield engine
    await engine.dispose()


@pytest_asyncio.fixture
async def async_session(async_engine):
    """Provide AsyncSession per test."""
    session_factory = async_sessionmaker(async_engine, expire_on_commit=False)
    async with session_factory() as session:
        yield session


@pytest_asyncio.fixture
async def test_client(async_engine):
    """Provide TestClient with overridden get_db dependency."""
    session_factory = async_sessionmaker(async_engine, expire_on_commit=False)

    async def _override_get_db():
        async with session_factory() as session:
            try:
                yield session
                await session.commit()
            except Exception:
                await session.rollback()
                raise

    app.dependency_overrides[get_db] = _override_get_db
    with TestClient(app) as client:
        yield client
    app.dependency_overrides.clear()


@pytest_asyncio.fixture
async def auth_headers(test_client):
    """Register and login a test admin officer, returning Authorization header dict."""
    reg_resp = test_client.post(
        "/api/auth/register",
        json={
            "email": "master.analyst@ksp.gov.in",
            "password": "MasterPassword123!",
            "full_name": "Senior Analyst Patil",
            "badge_number": "KSP-00100",
            "rank": "Senior Analyst",
            "role": "admin",
        },
    )
    assert reg_resp.status_code == 201

    login_resp = test_client.post(
        "/api/auth/login",
        json={
            "email": "master.analyst@ksp.gov.in",
            "password": "MasterPassword123!",
        },
    )
    assert login_resp.status_code == 200
    token = login_resp.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}
