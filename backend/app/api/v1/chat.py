"""
Crime Intelligence Platform — Chat & AI RAG API Endpoints
"""

from __future__ import annotations

from typing import List, Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_current_token_payload, security_scheme
from app.db.session import get_db
from app.rag.engine import rag_engine
from app.schemas.chat import (
    ChatResponseData,
    ChatSessionDetail,
    ChatSessionResponse,
    RAGQueryRequest,
)
from app.core.responses import ChatResponse
from app.services.chat_service import chat_memory_service

router = APIRouter(tags=["AI Chat & Memory"])


@router.post(
    "/chat",
    response_model=ChatResponse,
    summary="Process AI Intelligence Query (RAG Pipeline)",
    description=(
        "Executes the full RAG pipeline: Intent Analysis -> Conversation Context -> "
        "Vector Search -> Crime Records & Legal Acts Retrieval -> Gemini Reasoning -> "
        "Grounded Response with Citations & Evidence -> Memory Retention."
    ),
)
async def chat_query(
    request: RAGQueryRequest,
    db: AsyncSession = Depends(get_db),
    credentials=Depends(security_scheme),
) -> ChatResponse:
    user_id = None
    if credentials:
        try:
            from app.core.security import decode_access_token
            payload = decode_access_token(credentials.credentials)
            user_id = payload.get("sub")
        except Exception:
            pass

    structured_data: ChatResponseData = await rag_engine.process_query(
        db, request=request, user_id=user_id
    )

    # Extract refTags from FIR IDs
    ref_tags = structured_data.fir_ids if structured_data.fir_ids else ["KSP-INTEL"]

    return ChatResponse(
        text=structured_data.answer,
        confidence=structured_data.confidence,
        refTags=ref_tags,
        structured=structured_data,
    )


@router.get(
    "/chat/sessions",
    response_model=List[ChatSessionResponse],
    summary="List User Chat Sessions",
    description="List active and historical chat sessions for the authenticated user.",
)
async def list_chat_sessions(
    db: AsyncSession = Depends(get_db),
    payload=Depends(get_current_token_payload),
) -> List[ChatSessionResponse]:
    return await chat_memory_service.list_user_sessions(db, payload.sub)


@router.get(
    "/chat/history/{session_id}",
    response_model=ChatSessionDetail,
    summary="Get Chat Session History",
    description="Retrieve chronological turn history for a chat session.",
)
async def get_chat_history(
    session_id: str,
    db: AsyncSession = Depends(get_db),
) -> ChatSessionDetail:
    return await chat_memory_service.get_session_detail(db, session_id)


@router.get(
    "/history",
    response_model=List[ChatSessionResponse],
    summary="Get Chat History Alias",
    description="Alias endpoint for listing user chat session history.",
)
async def get_history_alias(
    db: AsyncSession = Depends(get_db),
    payload=Depends(get_current_token_payload),
) -> List[ChatSessionResponse]:
    return await chat_memory_service.list_user_sessions(db, payload.sub)
