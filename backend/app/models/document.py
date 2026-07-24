"""
Crime Intelligence Platform — Document Index Model

Tracks uploaded documents (CSV, PDF, DOCX, TXT, Images) and vector index status.
"""

from __future__ import annotations

from typing import Optional

from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base_class import Base, PrimaryKeyMixin, TimestampMixin


class DocumentIndex(Base, PrimaryKeyMixin, TimestampMixin):
    """Document upload & vector indexing registry model."""

    __tablename__ = "document_indices"

    filename: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )
    file_type: Mapped[str] = mapped_column(
        String(50),  # 'csv', 'pdf', 'docx', 'txt', 'image'
        nullable=False,
    )
    file_path: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
    )
    file_size_bytes: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )
    chunk_count: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )
    status: Mapped[str] = mapped_column(
        String(50),  # 'pending', 'processing', 'indexed', 'failed'
        default="pending",
        nullable=False,
        index=True,
    )
    error_message: Mapped[Optional[str]] = mapped_column(
        Text,
        nullable=True,
    )
