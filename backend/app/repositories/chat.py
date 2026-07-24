"""
Crime Intelligence Platform — Chat Repository

Data access layer for Chat sessions, multi-turn conversation memory, and message history.
"""

from __future__ import annotations

import uuid
from typing import Any, Dict, List, Optional

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.chat import ChatMessage, ChatSession
from app.repositories.base import BaseRepository
from app.schemas.chat import ChatMessageCreate, ChatSessionCreate


class ChatSessionRepository(BaseRepository[ChatSession, ChatSessionCreate, ChatSessionCreate]):
    """Repository handling database operations for Chat sessions."""

    def __init__(self) -> None:
        super().__init__(ChatSession)

    async def get_by_session_id(
        self,
        db: AsyncSession,
        session_id: str,
        include_messages: bool = True,
    ) -> Optional[ChatSession]:
        """Fetch chat session by session_id UUID string."""
        stmt = select(ChatSession).where(ChatSession.session_id == session_id)
        if include_messages:
            stmt = stmt.options(selectinload(ChatSession.messages))
        res = await db.execute(stmt)
        return res.scalar_one_or_none()

    async def get_or_create_session(
        self,
        db: AsyncSession,
        session_id: Optional[str] = None,
        user_id: Optional[str] = None,
        title: str = "New Intelligence Query",
    ) -> ChatSession:
        """Get an existing session or create a new one if not found."""
        if session_id:
            existing = await self.get_by_session_id(db, session_id, include_messages=True)
            if existing:
                return existing

        new_session_id = session_id or str(uuid.uuid4())
        session_obj = ChatSession(
            session_id=new_session_id,
            user_id=user_id,
            title=title,
        )
        db.add(session_obj)
        await db.flush()
        await db.refresh(session_obj)
        return session_obj

    async def list_user_sessions(
        self,
        db: AsyncSession,
        user_id: str,
        limit: int = 20,
    ) -> List[ChatSession]:
        """List chat sessions for a specific user ordered by updated_at."""
        stmt = (
            select(ChatSession)
            .where(ChatSession.user_id == user_id)
            .order_by(ChatSession.updated_at.desc())
            .limit(limit)
        )
        res = await db.execute(stmt)
        return list(res.scalars().all())


class ChatMessageRepository(BaseRepository[ChatMessage, ChatMessageCreate, ChatMessageCreate]):
    """Repository handling database operations for Chat messages."""

    def __init__(self) -> None:
        super().__init__(ChatMessage)

    async def append_message(
        self,
        db: AsyncSession,
        session_id: str,
        sender: str,
        content: str,
        confidence: Optional[str] = None,
        reasoning: Optional[str] = None,
        metadata_json: Optional[Dict[str, Any]] = None,
    ) -> ChatMessage:
        """Append a new message turn into an active chat session."""
        msg = ChatMessage(
            session_id=session_id,
            sender=sender,
            content=content,
            confidence=confidence,
            reasoning=reasoning,
            metadata_json=metadata_json,
        )
        db.add(msg)
        await db.flush()
        await db.refresh(msg)
        return msg

    async def get_history(
        self,
        db: AsyncSession,
        session_id: str,
        limit: int = 50,
    ) -> List[ChatMessage]:
        """Fetch chronological message history for context memory."""
        stmt = (
            select(ChatMessage)
            .where(ChatMessage.session_id == session_id)
            .order_by(ChatMessage.created_at.asc())
            .limit(limit)
        )
        res = await db.execute(stmt)
        return list(res.scalars().all())


chat_session_repository = ChatSessionRepository()
chat_message_repository = ChatMessageRepository()
