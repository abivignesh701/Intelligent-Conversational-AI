"""
Crime Intelligence Platform — RAG Retriever & Intent Analyzer

Performs query intent classification, vector similarity search, and evidence grounding citation generation.
"""

from __future__ import annotations

from typing import List, Optional

from app.core.gemini import gemini_client
from app.core.logging import get_logger
from app.rag.vector_store import vector_store
from app.schemas.chat import EvidenceItem

logger = get_logger(__name__)


class IntentType:
    SUSPECT_LOOKUP = "SUSPECT_LOOKUP"
    CRIME_PATTERN = "CRIME_PATTERN"
    LEGAL_ACT_REFERENCE = "LEGAL_ACT_REFERENCE"
    STATION_PATROL = "STATION_PATROL"
    GENERAL_QUERY = "GENERAL_QUERY"


class RAGRetriever:
    """RAG Retriever executing intent analysis, vector similarity search, and evidence citation building."""

    def __init__(self) -> None:
        self.store = vector_store
        self.client = gemini_client

    def analyze_intent(self, query: str) -> str:
        """Classify user query intent for targeted retrieval."""
        q_lower = query.lower()
        if any(w in q_lower for w in ["suspect", "accused", "alias", "associate", "guja", "vicky"]):
            return IntentType.SUSPECT_LOOKUP
        elif any(w in q_lower for w in ["pattern", "theft", "modu", "corridor", "robbery", "cyber"]):
            return IntentType.CRIME_PATTERN
        elif any(w in q_lower for w in ["act", "bns", "bnss", "bsa", "section", "ipc", "ndps", "pocso"]):
            return IntentType.LEGAL_ACT_REFERENCE
        elif any(w in q_lower for w in ["patrol", "station", "sector", "unit", "officer"]):
            return IntentType.STATION_PATROL
        return IntentType.GENERAL_QUERY

    async def retrieve_evidence(
        self,
        query: str,
        top_k: int = 5,
        filter_category: Optional[str] = None,
        filter_district: Optional[str] = None,
    ) -> List[EvidenceItem]:
        """
        Execute vector similarity search over FAISS and convert hits into EvidenceItem models.

        Args:
            query: User prompt query string
            top_k: Number of top evidence documents to retrieve
            filter_category: Optional category filter
            filter_district: Optional district filter

        Returns:
            List[EvidenceItem]: Grounded evidence citations
        """
        intent = self.analyze_intent(query)
        logger.info("rag_intent_classified", intent=intent, query_length=len(query))

        query_vector = await self.client.get_embedding(query)
        hits = self.store.similarity_search(
            query_vector=query_vector,
            top_k=top_k,
            filter_category=filter_category,
            filter_district=filter_district,
        )

        evidence_items: List[EvidenceItem] = []
        for chunk_dict, score in hits:
            content = chunk_dict.get("content", "")
            source = chunk_dict.get("source", "")
            meta = chunk_dict.get("metadata", {})

            fir_id = meta.get("fir_id")

            evidence_items.append(
                EvidenceItem(
                    fir_id=fir_id,
                    source=source,
                    snippet=content[:300] + ("..." if len(content) > 300 else ""),
                    relevance_score=round(score, 4),
                )
            )

        logger.info("rag_evidence_retrieved", count=len(evidence_items))
        return evidence_items


rag_retriever = RAGRetriever()
