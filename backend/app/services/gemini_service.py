"""
Crime Intelligence Platform — Gemini AI Orchestration Service

Orchestrates prompt building, Gemini API invocation, structured JSON parsing,
and fallback error handling for AI reasoning.
"""

from __future__ import annotations

import json
import re
from typing import Any, Dict, List, Optional

from app.core.gemini import GeminiClient, gemini_client
from app.core.logging import get_logger
from app.schemas.chat import ChatResponseData, EvidenceItem
from app.services.prompt_builder import PromptBuilder, prompt_builder

logger = get_logger(__name__)


class GeminiService:
    """Service orchestrating Gemini AI analysis and structured response parsing."""

    def __init__(self, client: Optional[GeminiClient] = None) -> None:
        self.client = client or gemini_client
        self.builder = prompt_builder

    async def analyze_intelligence(
        self,
        user_query: str,
        retrieved_evidence: Optional[List[EvidenceItem]] = None,
        history: Optional[List[dict]] = None,
        context_scope: str = "KSP Intelligence DB",
    ) -> ChatResponseData:
        """
        Executes full Gemini AI intelligence reasoning turn over retrieved RAG evidence.

        Args:
            user_query: User investigation question
            retrieved_evidence: List of retrieved evidence items
            history: Optional conversation history
            context_scope: Context scope name

        Returns:
            ChatResponseData: Structured response matching schema
        """
        evidence_list = retrieved_evidence or []
        prompt_text = self.builder.build_rag_prompt(
            user_query=user_query,
            retrieved_evidence=evidence_list,
            history=history,
            context_scope=context_scope,
        )

        try:
            raw_response = await self.client.generate_content(
                contents=prompt_text,
                system_instruction=self.builder.SYSTEM_INSTRUCTION,
                temperature=0.2,  # Low temperature for deterministic factual extraction
                response_mime_type="application/json",
            )

            structured_data = self._parse_structured_json(raw_response, evidence_list)
            return structured_data

        except Exception as exc:
            logger.error("gemini_service_analysis_failed", error=str(exc))
            # Fallback structured response gracefully informing user
            return ChatResponseData(
                answer=f"### Intelligence Analysis Notice\n\nAn error occurred while communicating with the AI service: {str(exc)}",
                evidence=evidence_list,
                confidence="0%",
                reasoning=f"AI service exception: {type(exc).__name__}",
                missing_information=["AI response unavailable due to service error"],
            )

    def _parse_structured_json(
        self,
        raw_text: str,
        fallback_evidence: List[EvidenceItem],
    ) -> ChatResponseData:
        """Parse raw LLM output into ChatResponseData with robust cleaning."""
        cleaned_text = raw_text.strip()

        # Strip markdown code fencing if present (```json ... ```)
        if cleaned_text.startswith("```"):
            cleaned_text = re.sub(r"^```(?:json)?\n?", "", cleaned_text)
            cleaned_text = re.sub(r"\n?```$", "", cleaned_text).strip()

        try:
            data_dict = json.loads(cleaned_text)

            # Ensure evidence list carries original evidence if empty
            if not data_dict.get("evidence") and fallback_evidence:
                data_dict["evidence"] = [e.model_dump() for e in fallback_evidence]

            return ChatResponseData.model_validate(data_dict)

        except (json.JSONDecodeError, Exception) as exc:
            logger.warning("json_parsing_failed_fallback_unstructured", error=str(exc))
            # If JSON parsing fails, wrap raw text cleanly in answer
            return ChatResponseData(
                answer=cleaned_text or raw_text,
                evidence=fallback_evidence,
                confidence="85%",
                reasoning="Generated from unstructured AI response text.",
            )


gemini_service = GeminiService()
