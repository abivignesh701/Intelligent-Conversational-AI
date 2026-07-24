"""
Module 10 Verification Tests
Tests Conversation Memory, anaphora resolution, follow-up query rewriting, and multi-turn persistence.
"""

import pytest
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from app.db.base_class import Base
from app.memory.context_memory import ConversationMemoryManager
from app.rag.engine import RAGEngine
from app.schemas.chat import RAGQueryRequest, ChatMessageResponse


def test_memory_anaphora_resolution():
    """Verify follow-up query resolution for pronouns, cases, and associates."""
    memory = ConversationMemoryManager()

    mock_history = [
        ChatMessageResponse(
            id=1,
            session_id="sess-01",
            sender="user",
            content="Show details for FIR-2024-BLR-0091",
            created_at="2026-01-01T00:00:00Z",
        ),
        ChatMessageResponse(
            id=2,
            session_id="sess-01",
            sender="ai",
            content="FIR-2024-BLR-0091 involves suspect Ramesh Alias Guja for vehicle theft.",
            metadata_json={"fir_ids": ["FIR-2024-BLR-0091"], "possible_suspects": ["Ramesh Alias Guja"]},
            created_at="2026-01-01T00:00:05Z",
        ),
    ]

    # Test Pronoun Resolution: "What about him?"
    rewritten_pronoun, _ = memory.resolve_followup_query("What about him?", mock_history)
    assert "Ramesh Alias Guja" in rewritten_pronoun

    # Test Associate Resolution: "Any associates?"
    rewritten_assoc, _ = memory.resolve_followup_query("Any associates?", mock_history)
    assert "associates" in rewritten_assoc.lower()
    assert "Ramesh Alias Guja" in rewritten_assoc

    # Test Case Resolution: "Show previous case"
    rewritten_case, _ = memory.resolve_followup_query("Show previous case", mock_history)
    assert "FIR-2024-BLR-0091" in rewritten_case


@pytest.mark.asyncio
async def test_rag_engine_multi_turn_memory():
    """Verify multi-turn conversation memory persistence across turns."""
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    rag_engine = RAGEngine()

    async with async_session() as db:
        # Turn 1
        req1 = RAGQueryRequest(
            prompt="Analyze vehicle theft pattern under FIR-2024-BLR-0091 involving Ramesh Alias Guja",
            session_id="sess-multi-99",
        )
        resp1 = await rag_engine.process_query(db, req1, user_id="officer@ksp.gov.in")
        assert resp1.answer != ""

        # Turn 2: Follow-up question "Any associates?"
        req2 = RAGQueryRequest(
            prompt="Any associates?",
            session_id="sess-multi-99",
        )
        resp2 = await rag_engine.process_query(db, req2, user_id="officer@ksp.gov.in")
        assert resp2.answer != ""

    await engine.dispose()
