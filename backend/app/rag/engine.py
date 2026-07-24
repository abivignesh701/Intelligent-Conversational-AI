"""
Crime Intelligence Platform — Full RAG Pipeline Engine

Orchestrates the entire Retrieval-Augmented Generation pipeline:
User Question -> Intent Analysis -> Follow-up Anaphora Resolution ->
Vector Search -> Relevant Crime Records -> Prompt Composer -> Gemini LLM ->
Grounded Response -> Citations & Evidence -> Memory Retention.
"""

from __future__ import annotations

from typing import Optional

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.logging import get_logger
from app.memory.context_memory import memory_manager
from app.rag.retriever import RAGRetriever, rag_retriever
from app.schemas.chat import ChatResponseData, RAGQueryRequest
from app.services.chat_service import chat_memory_service
from app.services.gemini_service import gemini_service

logger = get_logger(__name__)


class RAGEngine:
    """Core RAG Pipeline Engine orchestrating retrieval, memory resolution, LLM reasoning, grounding, and memory."""

    def __init__(self) -> None:
        self.retriever = rag_retriever
        self.gemini_service = gemini_service
        self.memory_service = chat_memory_service
        self.memory_manager = memory_manager

    async def process_query(
        self,
        db: AsyncSession,
        request: RAGQueryRequest,
        user_id: Optional[str] = None,
    ) -> ChatResponseData:
        """
        Process user question through full RAG pipeline with follow-up memory resolution.

        Pipeline Steps:
            1. Intent Analysis & Session Memory Fetch
            2. Follow-Up Reference Resolution (Anaphora resolution for pronouns & cases)
            3. FAISS Vector Search over Crime Records & Legal Acts
            4. RAG Evidence Assembly & Prompt Composition
            5. Gemini AI Reasoning & Grounded Structured Response
            6. Conversation Memory Persistence (save turn)

        Args:
            db: Async database session
            request: RAGQueryRequest schema containing prompt & filters
            user_id: Authenticated user ID or email

        Returns:
            ChatResponseData: Grounded intelligence analysis response
        """
        logger.info(
            "rag_pipeline_execution_started",
            query=request.prompt[:100],
            session_id=request.session_id,
        )

        # 1. Fetch Session & Memory History if session_id provided
        session_id = request.session_id
        history_messages = []
        history_list = None

        if session_id:
            try:
                session_detail = await self.memory_service.get_session_detail(db, session_id)
                history_messages = session_detail.messages
                history_list = [
                    {"sender": m.sender, "content": m.content}
                    for m in history_messages
                ]
            except Exception:
                session = await self.memory_service.get_or_create_session(
                    db, session_id=session_id, user_id=user_id
                )
                session_id = session.session_id

        # 2. Resolve Follow-Up Queries (Anaphora resolution: "him", "previous case", "any associates")
        active_query = request.prompt
        if history_messages:
            active_query, active_entities = self.memory_manager.resolve_followup_query(
                request.prompt, history_messages
            )

        # 3. Vector Search Retrieval over FAISS using resolved active query
        retrieved_evidence = await self.retriever.retrieve_evidence(
            query=active_query,
            top_k=request.top_k,
            filter_category=request.filter_category,
            filter_district=request.filter_district,
        )

        # 4. Gemini LLM Reasoning & Response Grounding
        response_data = await self.gemini_service.analyze_intelligence(
            user_query=request.prompt,
            retrieved_evidence=retrieved_evidence,
            history=history_list,
            context_scope=request.context or "KSP Intelligence DB",
        )

        # 5. Save Conversation Memory Turn
        if session_id:
            try:
                await self.memory_service.save_turn(
                    db,
                    session_id=session_id,
                    user_prompt=request.prompt,
                    ai_response_data=response_data,
                )
                logger.info("rag_turn_saved_to_memory", session_id=session_id)
            except Exception as exc:
                logger.warning("rag_memory_save_failed", error=str(exc))

        logger.info("rag_pipeline_execution_completed")
        return response_data


rag_engine = RAGEngine()
