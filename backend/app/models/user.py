"""
Crime Intelligence Platform — User Model

Represents law enforcement officers, analysts, and administrators.
"""

from __future__ import annotations

from typing import Optional

from sqlalchemy import Boolean, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base_class import Base, PrimaryKeyMixin, TimestampMixin


class User(Base, PrimaryKeyMixin, TimestampMixin):
    """User account model for police officers, analysts, and admins."""

    __tablename__ = "users"

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        index=True,
        nullable=False,
    )
    hashed_password: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )
    full_name: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )
    badge_number: Mapped[Optional[str]] = mapped_column(
        String(50),
        unique=True,
        index=True,
        nullable=True,
    )
    rank: Mapped[str] = mapped_column(
        String(100),
        default="Inspector",
        nullable=False,
    )
    role: Mapped[str] = mapped_column(
        String(50),
        default="officer",
        nullable=False,  # 'admin', 'analyst', 'officer'
    )
    police_station_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("police_stations.id", ondelete="SET NULL"),
        nullable=True,
    )

    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False,
    )
    is_superuser: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )
