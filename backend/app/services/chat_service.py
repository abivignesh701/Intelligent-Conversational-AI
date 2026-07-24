"""
Crime Intelligence Platform — Chat & Memory Business Service

Business logic for conversational sessions, multi-turn memory retention,
saving AI turn history, and restoring contextual threads.
"""

from __future__ import annotations

from typing import List, Optional

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import NotFoundError
from app.models.chat import ChatSession
from app.repositories.chat import chat_message_repository, chat_session_repository
from app.schemas.chat import (
    ChatMessageResponse,
    ChatResponseData,
    ChatSessionDetail,
    ChatSessionResponse,
)


class ChatMemoryService:
    """Business service managing chat threads and conversational memory persistence."""

    def __init__(self) -> None:
        self.session_repo = chat_session_repository
        self.message_repo = chat_message_repository

    async def get_or_create_session(
        self,
        db: AsyncSession,
        session_id: Optional[str] = None,
        user_id: Optional[str] = None,
        title: str = "New Intelligence Query",
    ) -> ChatSessionResponse:
        """Fetch active chat session or create a new session thread."""
        session = await self.session_repo.get_or_create_session(
            db, session_id=session_id, user_id=user_id, title=title
        )
        return ChatSessionResponse.model_validate(session)

    async def save_turn(
        self,
        db: AsyncSession,
        session_id: str,
        user_prompt: str,
        ai_response_data: ChatResponseData,
    ) -> None:
        """Save a complete conversation turn (user query + AI answer with evidence metadata)."""
        # Save user message
        await self.message_repo.append_message(
            db,
            session_id=session_id,
            sender="user",
            content=user_prompt,
        )

        # Save AI response with metadata
        await self.message_repo.append_message(
            db,
            session_id=session_id,
            sender="ai",
            content=ai_response_data.answer,
            confidence=ai_response_data.confidence,
            reasoning=ai_response_data.reasoning,
            metadata_json=ai_response_data.model_dump(),
        )

    async def get_session_detail(self, db: AsyncSession, session_id: str) -> ChatSessionDetail:
        """Get complete chat session with full turn history for memory restoration."""
        session = await self.session_repo.get_by_session_id(db, session_id, include_messages=True)
        if not session:
            raise NotFoundError(
                detail=f"Chat session '{session_id}' not found.",
                context={"session_id": session_id},
            )
        return ChatSessionDetail.model_validate(session)

    async def list_user_sessions(self, db: AsyncSession, user_id: str) -> List[ChatSessionResponse]:
        """List past chat threads for an officer or analyst."""
        sessions = await self.session_repo.list_user_sessions(db, user_id)
        return [ChatSessionResponse.model_validate(s) for s in sessions]


chat_memory_service = ChatMemoryService()
