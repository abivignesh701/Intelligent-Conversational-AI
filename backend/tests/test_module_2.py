"""
Module 2 Verification Tests
Tests Database session, Declarative Base, Mixins, and Generic BaseRepository.
"""

import pytest
import pytest_asyncio
from pydantic import BaseModel
from sqlalchemy import String
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base_class import Base, PrimaryKeyMixin, TimestampMixin, camel_to_snake
from app.repositories.base import BaseRepository

# ── Sample Test Model & Schemas ─────────────────────────────────────


class SampleItem(Base, PrimaryKeyMixin, TimestampMixin):
    __tablename__ = "sample_items"

    name: Mapped[str] = mapped_column(String(100), nullable=False)
    code: Mapped[str] = mapped_column(String(50), nullable=False)


class SampleItemCreate(BaseModel):
    name: str
    code: str


class SampleItemUpdate(BaseModel):
    name: str | None = None
    code: str | None = None


# ── Test Suite ─────────────────────────────────────────────────────


def test_camel_to_snake():
    """Verify camel_to_snake naming helper."""
    assert camel_to_snake("CaseMaster") == "case_master"
    assert camel_to_snake("PoliceStation") == "police_station"
    assert camel_to_snake("FIRRecord") == "fir_record"


def test_base_model_to_dict():
    """Verify to_dict serialization on Base model instance."""
    item = SampleItem(id=1, name="Test Item", code="TST-01")
    d = item.to_dict()
    assert d["id"] == 1
    assert d["name"] == "Test Item"
    assert d["code"] == "TST-01"


@pytest.mark.asyncio
async def test_base_repository_crud():
    """Verify async CRUD operations on BaseRepository using SQLite in-memory DB."""
    # Set up in-memory sqlite engine for testing
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    repo = BaseRepository[SampleItem, SampleItemCreate, SampleItemUpdate](SampleItem)

    async with async_session() as db:
        # Create
        created = await repo.create(db, SampleItemCreate(name="KSP Radar", code="RAD-01"))
        assert created.id is not None
        assert created.name == "KSP Radar"

        # Get
        fetched = await repo.get(db, created.id)
        assert fetched is not None
        assert fetched.code == "RAD-01"

        # Get by field
        by_field = await repo.get_by_field(db, "code", "RAD-01")
        assert by_field is not None
        assert by_field.id == created.id

        # Update
        updated = await repo.update(db, fetched, SampleItemUpdate(name="KSP Radar Updated"))
        assert updated.name == "KSP Radar Updated"

        # Count
        total = await repo.count(db)
        assert total == 1

        # Delete
        deleted = await repo.delete(db, created.id)
        assert deleted is True

        # Confirm deleted
        post_del = await repo.get(db, created.id)
        assert post_del is None

    await engine.dispose()
