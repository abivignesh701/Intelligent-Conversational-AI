"""
Crime Intelligence Platform — Chat & Memory Models

Models for managing conversational chat sessions, message history, AI response metadata,
confidence scores, evidence citations, and reasoning chains.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional

from sqlalchemy import ForeignKey, JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base_class import Base, PrimaryKeyMixin, TimestampMixin


class ChatSession(Base, PrimaryKeyMixin, TimestampMixin):
    """Conversational chat session container."""

    __tablename__ = "chat_sessions"

    session_id: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        index=True,
        nullable=False,
    )
    user_id: Mapped[Optional[str]] = mapped_column(
        String(100),
        index=True,
        nullable=True,
    )
    title: Mapped[str] = mapped_column(
        String(255),
        default="New Intelligence Query",
        nullable=False,
    )

    messages: Mapped[List[ChatMessage]] = relationship(
        "ChatMessage",
        back_populates="session",
        cascade="all, delete-orphan",
        order_by="ChatMessage.created_at.asc()",
    )


class ChatMessage(Base, PrimaryKeyMixin, TimestampMixin):
    """Individual message in a chat session."""

    __tablename__ = "chat_messages"

    session_id: Mapped[str] = mapped_column(
        ForeignKey("chat_sessions.session_id", ondelete="CASCADE"),
        index=True,
        nullable=False,
    )
    sender: Mapped[str] = mapped_column(
        String(20),  # 'user' or 'ai'
        nullable=False,
    )
    content: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )
    confidence: Mapped[Optional[str]] = mapped_column(
        String(20),
        nullable=True,  # e.g., "94%"
    )
    reasoning: Mapped[Optional[str]] = mapped_column(
        Text,
        nullable=True,
    )
    metadata_json: Mapped[Optional[Dict[str, Any]]] = mapped_column(
        JSON,
        nullable=True,  # { refTags: [...], evidence: [...], related_cases: [...], etc }
    )

    session: Mapped[ChatSession] = relationship("ChatSession", back_populates="messages")
