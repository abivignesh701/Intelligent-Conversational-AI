"""
Crime Intelligence Platform — Database Session & Connection Management

Manages PostgreSQL connection pooling, async sessions, and dependency injection.
Uses SQLAlchemy 2.0 async engine powered by asyncpg.

Architecture:
    - Async engine with configurable connection pooling (size=20, max_overflow=10)
    - Automatic pool pre-ping (ping before checkout) prevents stale connection errors
    - `async_sessionmaker` provides isolated sessions per HTTP request
    - FastAPI `get_db()` dependency generator handles session lifecycle (yield/close/rollback)
    - Synchronous engine getter for Alembic migrations

Usage:
    from app.db.session import get_db
    @app.get("/cases")
    async def list_cases(db: AsyncSession = Depends(get_db)):
        ...
"""

from __future__ import annotations

from typing import AsyncGenerator

from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.orm import Session, sessionmaker

from app.core.config import get_settings
from app.core.logging import get_logger

logger = get_logger(__name__)
settings = get_settings()

# ── Connection Pool Settings ───────────────────────────────────────
# Default pool parameters optimized for high-throughput production backends:
#   - pool_size=20: Number of persistent connections kept open in pool
#   - max_overflow=10: Extra temporary connections permitted under peak load
#   - pool_pre_ping=True: Validates connection vitality before issuing queries
#   - pool_recycle=3600: Recycles connections older than 1 hour to prevent memory leaks

is_sqlite = settings.DATABASE_URL.startswith("sqlite")

engine_kwargs = {
    "echo": settings.DEBUG and settings.is_development,
    "future": True,
}

if not is_sqlite:
    engine_kwargs.update(
        {
            "pool_size": 20,
            "max_overflow": 10,
            "pool_pre_ping": True,
            "pool_recycle": 3600,
        }
    )

# ── Primary Async Engine & Session Maker ───────────────────────────

async_engine: AsyncEngine = create_async_engine(
    settings.DATABASE_URL,
    **engine_kwargs,
)

AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False,
)


# ── Dependency Injection Generator ─────────────────────────────────


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """
    FastAPI dependency that yields a database session for request duration.

    Guarantees:
        - Session is created cleanly at start of request
        - Automatically closed when request finishes
        - Rolls back uncommitted transaction on exception

    Yields:
        AsyncSession: Active SQLAlchemy async session
    """
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception as exc:
            await session.rollback()
            logger.error("database_session_rollback", error=str(exc))
            raise
        finally:
            await session.close()


# ── Migration Engine Helper ─────────────────────────────────────────


def get_sync_engine():
    """
    Creates a synchronous SQLAlchemy engine for Alembic migrations.

    Returns:
        Engine: Sync engine matching database_url_sync settings
    """
    sync_url = settings.database_url_sync
    return create_engine(
        sync_url,
        pool_pre_ping=True,
        echo=settings.DEBUG,
    )
