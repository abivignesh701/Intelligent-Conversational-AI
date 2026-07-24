"""
Crime Intelligence Platform — Conversation Memory Manager

Manages multi-turn conversation context, anaphora/pronoun resolution for follow-up queries
(e.g., 'What about him?', 'Show previous case', 'Any associates?'), active entity tracking,
and windowed history formatting.
"""

from __future__ import annotations

import re
from typing import Any, Dict, List, Optional, Tuple

from app.core.logging import get_logger
from app.schemas.chat import ChatMessageResponse

logger = get_logger(__name__)


class ConversationMemoryManager:
    """
    Manages conversational context memory, tracks active entities across turns,
    and rewrites ambiguous follow-up questions before RAG vector retrieval.
    """

    PRONOUN_TRIGGERS = ["him", "his", "he", "the suspect", "this suspect", "that person"]
    CASE_TRIGGERS = ["previous case", "that case", "the fir", "this case", "last case", "show case"]
    ASSOCIATE_TRIGGERS = ["any associates", "associates", "accomplices", "co-accused", "gang members"]
    EXPLAIN_TRIGGERS = ["explain further", "more details", "elaborate", "tell me more"]

    def extract_active_entities(
        self,
        messages: List[ChatMessageResponse | dict],
    ) -> Dict[str, Any]:
        """
        Scan prior conversation turns to extract active entities:
        last FIR number, last suspect name, last location, last category.

        Args:
            messages: Turn-by-turn message history

        Returns:
            Dict[str, Any]: Dictionary containing active entity references
        """
        entities: Dict[str, Any] = {
            "last_fir": None,
            "last_suspect": None,
            "last_location": None,
            "last_category": None,
        }

        # Iterate in reverse to find most recent entity occurrences
        for msg in reversed(messages):
            content = msg.content if hasattr(msg, "content") else msg.get("content", "")
            meta = getattr(msg, "metadata_json", None) or (msg.get("metadata_json") if isinstance(msg, dict) else None) or {}

            # Extract FIR IDs from metadata or text regex
            if not entities["last_fir"]:
                fir_ids = meta.get("fir_ids", [])
                if fir_ids:
                    entities["last_fir"] = fir_ids[0]
                else:
                    fir_match = re.search(r"FIR-[0-9A-Z-]+", content, re.IGNORECASE)
                    if fir_match:
                        entities["last_fir"] = fir_match.group(0).upper()

            # Extract Suspects from metadata or text
            if not entities["last_suspect"]:
                suspects = meta.get("possible_suspects", [])
                if suspects:
                    entities["last_suspect"] = suspects[0]
                else:
                    # Check common suspect patterns in text
                    suspect_match = re.search(r"(?:suspect|accused)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)", content)
                    if suspect_match:
                        entities["last_suspect"] = suspect_match.group(1)

        logger.info("memory_entities_extracted", entities=entities)
        return entities

    def resolve_followup_query(
        self,
        query: str,
        messages: List[ChatMessageResponse | dict],
    ) -> Tuple[str, Dict[str, Any]]:
        """
        Detect ambiguous follow-up questions and rewrite them into explicit queries using active entities.

        Examples:
            "What about him?" -> "What about suspect Ramesh Alias Guja?"
            "Show previous case" -> "Show case details for FIR-2024-BLR-0091"
            "Any associates?" -> "Who are the criminal associates of suspect Ramesh Alias Guja?"
            "Explain further" -> "Explain further details regarding FIR-2024-BLR-0091 and suspect Ramesh Alias Guja"

        Args:
            query: Raw user prompt
            messages: Previous turn history

        Returns:
            Tuple[str, Dict[str, Any]]: (Rewritten prompt, Extracted entities)
        """
        if not messages:
            return query, {}

        entities = self.extract_active_entities(messages)
        q_lower = query.lower().strip()
        rewritten = query

        last_suspect = entities.get("last_suspect")
        last_fir = entities.get("last_fir")

        # 1. Associate Triggers: "Any associates?"
        if any(trig in q_lower for trig in self.ASSOCIATE_TRIGGERS):
            if last_suspect and last_fir:
                rewritten = f"Who are the criminal associates and co-accused of suspect {last_suspect} in FIR {last_fir}?"
            elif last_suspect:
                rewritten = f"Who are the criminal associates and co-accused of suspect {last_suspect}?"
            elif last_fir:
                rewritten = f"Who are the co-accused and suspects involved in case {last_fir}?"

        # 2. Pronoun Triggers: "What about him?" / "Show his profile"
        elif any(trig in q_lower for trig in self.PRONOUN_TRIGGERS):
            if last_suspect:
                rewritten = re.sub(
                    r"\b(him|his|he|the suspect|this suspect|that person)\b",
                    f"suspect {last_suspect}",
                    query,
                    flags=re.IGNORECASE,
                )
                if rewritten == query:  # If regex didn't replace directly
                    rewritten = f"{query} (referring to suspect {last_suspect})"

        # 3. Case Triggers: "Show previous case"
        elif any(trig in q_lower for trig in self.CASE_TRIGGERS):
            if last_fir:
                rewritten = re.sub(
                    r"\b(previous case|that case|the fir|this case|last case|show case)\b",
                    f"case {last_fir}",
                    query,
                    flags=re.IGNORECASE,
                )
                if rewritten == query:
                    rewritten = f"{query} (referring to FIR {last_fir})"

        # 4. Explain Triggers: "Explain further"
        elif any(trig in q_lower for trig in self.EXPLAIN_TRIGGERS):
            context_refs = []
            if last_fir:
                context_refs.append(f"FIR {last_fir}")
            if last_suspect:
                context_refs.append(f"suspect {last_suspect}")

            if context_refs:
                rewritten = f"Provide detailed tactical analysis and explain further regarding {' and '.join(context_refs)}."

        if rewritten != query:
            logger.info(
                "followup_query_resolved",
                original=query,
                rewritten=rewritten,
            )

        return rewritten, entities

    def format_history_window(
        self,
        messages: List[ChatMessageResponse | dict],
        max_turns: int = 6,
    ) -> List[Dict[str, str]]:
        """
        Format recent message history into a clean sliding window list for prompt composition.

        Args:
            messages: Full list of message history objects
            max_turns: Maximum recent turns to include (default 6)

        Returns:
            List[Dict[str, str]]: List of formatted turn dicts [{'sender': 'user'/'ai', 'content': '...'}]
        """
        window = messages[-max_turns:]
        formatted: List[Dict[str, str]] = []

        for msg in window:
            sender = msg.sender if hasattr(msg, "sender") else msg.get("sender", "user")
            content = msg.content if hasattr(msg, "content") else msg.get("content", "")
            formatted.append({"sender": sender, "content": content})

        return formatted


memory_manager = ConversationMemoryManager()
