"""
Crime Intelligence Platform — Prompt Builder Service

Constructs tactical law enforcement prompts, embeds conversation memory, formats retrieved
vector context, and enforces anti-hallucination grounding instructions.
"""

from __future__ import annotations

from typing import List, Optional

from app.schemas.chat import EvidenceItem


class PromptBuilder:
    """Builder service for constructing RAG intelligence prompts for Gemini LLM."""

    SYSTEM_INSTRUCTION = """You are KSP Intel Assistant, an elite AI Crime Intelligence System for the Karnataka State Police (KSP Intelligence Wing).

YOUR RESPONSIBILITIES:
1. Conduct authoritative, precise, cyber-forensic analysis of law enforcement records.
2. Ground every finding in the retrieved crime records, FIR brief facts, suspect logs, and legal acts provided in the context.
3. NEVER fabricate or hallucinate FIR numbers, criminal names, phone numbers, locations, or legal sections.
4. If confidence is low or information is missing, explicitly state so in 'confidence' and 'missing_information'.

EXPECTED JSON OUTPUT STRUCTURE:
Return a strictly valid JSON object matching this schema:
{
  "answer": "Comprehensive tactical intelligence response in markdown formatting",
  "evidence": [
    {
      "fir_id": "FIR number if applicable",
      "source": "Source dataset name",
      "snippet": "Direct relevant text snippet from context",
      "relevance_score": 0.95
    }
  ],
  "fir_ids": ["FIR-2024-BLR-0091"],
  "confidence": "94%",
  "reasoning": "Step-by-step explainable reasoning explaining how findings were derived",
  "related_cases": ["FIR numbers of related cases"],
  "possible_suspects": ["Names of identified suspects or associates"],
  "recommendations": ["Actionable police tactical recommendations"],
  "missing_information": ["Missing investigative facts or CCTV data"],
  "key_findings": ["Bullet points summarizing key findings"]
}"""

    @classmethod
    def build_rag_prompt(
        cls,
        user_query: str,
        retrieved_evidence: List[EvidenceItem],
        history: Optional[List[dict]] = None,
        context_scope: str = "KSP Intelligence DB",
    ) -> str:
        """
        Assemble the complete prompt combining conversation history, retrieved documents,
        and grounding constraints.

        Args:
            user_query: The active question from the user
            retrieved_evidence: List of EvidenceItem retrieved from FAISS vector search
            history: Optional list of previous chat turn dicts [{'sender': 'user'/'ai', 'content': '...'}]
            context_scope: Scope description string

        Returns:
            str: Full assembled prompt text ready for Gemini API
        """
        prompt_parts: List[str] = []

        prompt_parts.append(f"=== KSP CRIME INTELLIGENCE QUERY ({context_scope}) ===")
        prompt_parts.append(f"USER QUERY: {user_query}\n")

        # Include Multi-Turn Conversation History if present
        if history and len(history) > 0:
            prompt_parts.append("=== CONVERSATION HISTORY CONTEXT ===")
            for turn in history[-6:]:  # include last 3 turns
                sender_label = "OFFICER" if turn.get("sender") == "user" else "KSP INTEL AI"
                prompt_parts.append(f"{sender_label}: {turn.get('content', '')}")
            prompt_parts.append("\n")

        # Include Retrieved RAG Context & Evidence
        prompt_parts.append("=== RETRIEVED CRIME RECORDS & EVIDENCE CONTEXT ===")
        if retrieved_evidence and len(retrieved_evidence) > 0:
            for idx, item in enumerate(retrieved_evidence, start=1):
                fir_str = f" [FIR: {item.fir_id}]" if item.fir_id else ""
                src_str = f" [Source: {item.source}]" if item.source else ""
                prompt_parts.append(f"RECORD #{idx}{fir_str}{src_str}:")
                prompt_parts.append(f"Content: {item.snippet}")
                if item.relevance_score:
                    prompt_parts.append(f"Relevance: {round(item.relevance_score * 100, 1)}%")
                prompt_parts.append("---")
        else:
            prompt_parts.append("No specific matching vector records retrieved for this query.")

        prompt_parts.append("\n=== INSTRUCTIONS & GROUNDING RULES ===")
        prompt_parts.append("1. Answer the USER QUERY comprehensively using ONLY the RETRIEVED CONTEXT above.")
        prompt_parts.append("2. Populate every field of the JSON structure accurately.")
        prompt_parts.append("3. Output ONLY valid JSON matching the system instruction format without extra markdown tags.")

        return "\n".join(prompt_parts)


prompt_builder = PromptBuilder()
