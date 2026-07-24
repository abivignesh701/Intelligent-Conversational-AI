"""
Crime Intelligence Platform — RAG & Chat Schemas

Pydantic schemas for AI RAG pipeline requests, evidence grounding, structured responses,
and conversation memory tracking.
"""

from __future__ import annotations

from datetime import datetime
from typing import Any, Dict, List, Optional

from pydantic import BaseModel, ConfigDict, Field


class EvidenceItem(BaseModel):
    """Grounding evidence citation item."""

    fir_id: Optional[str] = Field(default=None, description="Associated FIR ID (e.g. FIR-2024-BLR-0091)")
    case_id: Optional[str] = Field(default=None, description="Associated internal case ID")
    source: Optional[str] = Field(default=None, description="Source dataset or act (e.g. Accused.csv, BNS.pdf)")
    snippet: Optional[str] = Field(default=None, description="Direct relevant context snippet retrieved")
    relevance_score: Optional[float] = Field(default=None, description="Vector similarity or relevance score")


class ChatResponseData(BaseModel):
    """Full structured RAG intelligence analysis response."""

    answer: str = Field(description="Main intelligence analysis response text")
    evidence: List[EvidenceItem] = Field(default_factory=list, description="Grounding evidence sources")
    fir_ids: List[str] = Field(default_factory=list, description="Referenced FIR numbers")
    confidence: str = Field(default="90%", description="AI confidence score (e.g. '94%')")
    reasoning: str = Field(default="", description="Explainable AI step-by-step reasoning chain")
    related_cases: List[str] = Field(default_factory=list, description="Related case numbers")
    possible_suspects: List[str] = Field(default_factory=list, description="Identified potential suspects/associates")
    recommendations: List[str] = Field(default_factory=list, description="Tactical police recommendations")
    missing_information: List[str] = Field(default_factory=list, description="Missing investigative data points")
    key_findings: List[str] = Field(default_factory=list, description="Bulletized key intelligence findings")


class RAGQueryRequest(BaseModel):
    """User prompt request payload for RAG Pipeline."""

    prompt: str = Field(min_length=1, description="User investigation query or question")
    context: Optional[str] = Field(default="KSP Intelligence DB", description="Context scope")
    session_id: Optional[str] = Field(default=None, description="Active chat session ID for multi-turn memory")
    top_k: int = Field(default=5, ge=1, le=20, description="Number of vector context documents to retrieve")
    filter_category: Optional[str] = Field(default=None, description="Filter vector search by crime category")
    filter_district: Optional[str] = Field(default=None, description="Filter vector search by district")


class RAGSearchRequest(BaseModel):
    """Direct vector semantic search request payload."""

    query: str = Field(min_length=1, description="Semantic search query")
    top_k: int = Field(default=10, ge=1, le=50)
    score_threshold: float = Field(default=0.3, ge=0.0, le=1.0)


class RAGSearchResponse(BaseModel):
    """Direct vector semantic search response payload."""

    query: str
    total_results: int
    results: List[EvidenceItem] = Field(default_factory=list)


# ── Conversation Memory Schemas ───────────────────────────────────


class ChatMessageCreate(BaseModel):
    session_id: str
    sender: str  # 'user' or 'ai'
    content: str
    confidence: Optional[str] = None
    reasoning: Optional[str] = None
    metadata_json: Optional[Dict[str, Any]] = None


class ChatMessageResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    session_id: str
    sender: str
    content: str
    confidence: Optional[str] = None
    reasoning: Optional[str] = None
    metadata_json: Optional[Dict[str, Any]] = None
    created_at: datetime


class ChatSessionCreate(BaseModel):
    title: Optional[str] = "New Intelligence Query"


class ChatSessionResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    session_id: str
    user_id: Optional[str] = None
    title: str
    created_at: datetime
    updated_at: datetime


class ChatSessionDetail(ChatSessionResponse):
    messages: List[ChatMessageResponse] = Field(default_factory=list)
