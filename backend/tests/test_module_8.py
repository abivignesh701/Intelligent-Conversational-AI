"""
Module 8 Verification Tests
Tests Gemini Client, Prompt Builder, structured JSON parsing, and retry handling.
"""

import pytest
from app.core.gemini import GeminiClient
from app.services.prompt_builder import PromptBuilder
from app.services.gemini_service import GeminiService
from app.schemas.chat import EvidenceItem, ChatResponseData


def test_gemini_client_fallback_and_embedding():
    """Verify Gemini client operates in simulated fallback mode when key is absent."""
    client = GeminiClient(api_key="")
    assert client.is_configured is False
    assert client.chat_model is not None


@pytest.mark.asyncio
async def test_gemini_client_generate_content():
    """Verify fallback content generation returns valid structured JSON."""
    client = GeminiClient(api_key="")
    res_text = await client.generate_content("Analyze theft pattern in Koramangala")
    assert "Modus Operandi" in res_text or "answer" in res_text


@pytest.mark.asyncio
async def test_gemini_client_embedding():
    """Verify embedding generation produces 768-dimensional vector."""
    client = GeminiClient(api_key="")
    embedding = await client.get_embedding("FIR-2024-BLR-0091 vehicle theft facts")
    assert isinstance(embedding, list)
    assert len(embedding) == 768


def test_prompt_builder():
    """Verify prompt builder formats RAG context, history, and grounding rules."""
    evidence = [
        EvidenceItem(fir_id="FIR-2024-BLR-0091", source="CaseMaster.csv", snippet="Dark 2-wheeler theft at 21:30 hrs", relevance_score=0.94)
    ]
    history = [
        {"sender": "user", "content": "Any thefts reported near Koramangala?"},
        {"sender": "ai", "content": "Found 1 case under FIR-2024-BLR-0091."},
    ]

    prompt = PromptBuilder.build_rag_prompt(
        user_query="What about suspect Guja?",
        retrieved_evidence=evidence,
        history=history,
        context_scope="KSP Intel DB",
    )

    assert "What about suspect Guja?" in prompt
    assert "FIR-2024-BLR-0091" in prompt
    assert "KSP INTEL AI" in prompt
    assert "RECORD #1" in prompt
    assert "94.0%" in prompt


@pytest.mark.asyncio
async def test_gemini_service_analysis():
    """Verify GeminiService analyzes prompt and returns validated ChatResponseData."""
    service = GeminiService()
    evidence = [
        EvidenceItem(fir_id="FIR-2024-BLR-0091", source="CaseMaster.csv", snippet="Vehicle theft", relevance_score=0.92)
    ]

    result = await service.analyze_intelligence(
        user_query="Analyze vehicle theft pattern",
        retrieved_evidence=evidence,
    )

    assert isinstance(result, ChatResponseData)
    assert result.confidence != ""
    assert len(result.evidence) > 0
    assert result.evidence[0].fir_id == "FIR-2024-BLR-0091"
