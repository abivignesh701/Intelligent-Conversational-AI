"""
Crime Intelligence Platform — Declarative Base & Model Mixins

Provides the root Base class and standard mixins for all database models.
Uses SQLAlchemy 2.0 type-annotated Mapped attributes.

Architecture:
    - Base: Root DeclarativeBase for all ORM models
    - Automatic tablename generation from class name (PascalCase -> snake_case + 's')
    - TimestampMixin: Standard created_at and updated_at UTC timestamps
    - PrimaryKeyMixin: Standard integer primary key `id`
    - to_dict(): Serializes ORM model instances to Python dictionaries

Usage:
    from app.db.base_class import Base, TimestampMixin

    class CrimeRecord(Base, TimestampMixin):
        id: Mapped[int] = mapped_column(primary_key=True)
        title: Mapped[str]
"""

from __future__ import annotations

import re
from datetime import datetime, timezone
from typing import Any, Dict

from sqlalchemy import DateTime, Integer
from sqlalchemy.orm import DeclarativeBase, Mapped, declared_attr, mapped_column


def camel_to_snake(name: str) -> str:
    """Convert PascalCase or CamelCase string to snake_case."""
    s1 = re.sub("(.)([A-Z][a-z]+)", r"\1_\2", name)
    return re.sub("([a-z0-9])([A-Z])", r"\1_\2", s1).lower()


class Base(DeclarativeBase):
    """
    Root declarative base for all ORM models in the application.

    Automatically derives SQL tablename from class name if not specified explicitly:
        CaseMaster -> case_masters
        PoliceStation -> police_stations
    """

    @declared_attr.directive
    def __tablename__(cls) -> str:
        snake_name = camel_to_snake(cls.__name__)
        if not snake_name.endswith("s"):
            return f"{snake_name}s"
        return snake_name

    def to_dict(self) -> Dict[str, Any]:
        """
        Convert SQLAlchemy model instance to dictionary.

        Filters out internal SQLAlchemy state attributes (_sa_instance_state).
        Formats datetime values to ISO 8601 strings.

        Returns:
            Dict[str, Any]: Clean dictionary representation of model
        """
        result: Dict[str, Any] = {}
        for column in self.__table__.columns:
            value = getattr(self, column.name)
            if isinstance(value, datetime):
                result[column.name] = value.isoformat()
            else:
                result[column.name] = value
        return result


class TimestampMixin:
    """
    Mixin adding automatic created_at and updated_at UTC timestamps to models.
    """

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )


class PrimaryKeyMixin:
    """
    Mixin adding integer auto-increment primary key `id` to models.
    """

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        autoincrement=True,
        index=True,
    )
