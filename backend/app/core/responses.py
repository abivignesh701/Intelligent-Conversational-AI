"""
Crime Intelligence Platform — Standardized API Response Models

Defines the response envelope used by ALL API endpoints.
Ensures every response — success or error — follows the same structure.
"""

from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Dict, Generic, List, Optional, TypeVar

from pydantic import BaseModel, Field

from app.schemas.chat import ChatResponseData, EvidenceItem

T = TypeVar("T")


# ── Base Response Envelope ─────────────────────────────────────────


class APIResponse(BaseModel, Generic[T]):
    """Standard API response envelope."""

    success: bool = True
    message: str = "Request processed successfully."
    data: Optional[T] = None
    timestamp: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


# ── Error Response ─────────────────────────────────────────────────


class ErrorDetail(BaseModel):
    """Structured error detail for API error responses."""

    code: str = "INTERNAL_ERROR"
    message: str = "An unexpected error occurred."
    context: Dict[str, Any] = Field(default_factory=dict)


class ErrorResponse(BaseModel):
    """Standard API error response."""

    success: bool = False
    error: ErrorDetail
    timestamp: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


# ── Chat Response (Frontend-Compatible) ────────────────────────────


class ChatResponse(BaseModel):
    """
    Backward-compatible response for POST /api/gemini/analyze
    and POST /api/chat.

    Maps to what the frontend AIAssistantView.tsx currently consumes:
        { text, confidence, refTags }

    Also includes the full structured data for richer frontend consumption.
    """

    text: str = ""
    confidence: str = "0%"
    refTags: List[str] = Field(default_factory=list)
    structured: Optional[ChatResponseData] = None


# ── Paginated Response ─────────────────────────────────────────────


class PaginationMeta(BaseModel):
    """Pagination metadata for list endpoints."""

    page: int = 1
    page_size: int = 20
    total_items: int = 0
    total_pages: int = 0
    has_next: bool = False
    has_previous: bool = False


class PaginatedResponse(BaseModel, Generic[T]):
    """Paginated list response with metadata."""

    success: bool = True
    message: str = "Request processed successfully."
    data: List[T] = Field(default_factory=list)
    pagination: PaginationMeta = Field(default_factory=PaginationMeta)
    timestamp: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


# ── Health Check Response ──────────────────────────────────────────


class HealthResponse(BaseModel):
    """Health check response model."""

    status: str = "ok"
    service: str = "KSP Crime Intelligence Platform"
    version: str = "1.0.0"
    environment: str = "development"
    database: str = "unknown"
    vector_store: str = "unknown"
    gemini: str = "unknown"


# ── Helper Functions ───────────────────────────────────────────────


def success_response(
    data: Any = None,
    message: str = "Request processed successfully.",
) -> Dict[str, Any]:
    return APIResponse(
        success=True,
        message=message,
        data=data,
    ).model_dump()


def error_response(
    code: str = "INTERNAL_ERROR",
    message: str = "An unexpected error occurred.",
    context: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    return ErrorResponse(
        error=ErrorDetail(
            code=code,
            message=message,
            context=context or {},
        ),
    ).model_dump()


def paginated_response(
    data: list,
    page: int = 1,
    page_size: int = 20,
    total_items: int = 0,
    message: str = "Request processed successfully.",
) -> Dict[str, Any]:
    total_pages = max(1, (total_items + page_size - 1) // page_size)
    return PaginatedResponse(
        success=True,
        message=message,
        data=data,
        pagination=PaginationMeta(
            page=page,
            page_size=page_size,
            total_items=total_items,
            total_pages=total_pages,
            has_next=page < total_pages,
            has_previous=page > 1,
        ),
    ).model_dump()
