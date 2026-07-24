"""
Crime Intelligence Platform — Custom Exception Classes

Defines a hierarchy of application-specific exceptions.
Each exception type maps to a specific HTTP status code and error category.
The global exception handler in main.py converts these into structured API responses.

Architecture:
    - BaseAppException: root of all custom exceptions
    - Each subclass carries: status_code, error_code, detail, context
    - Caught by FastAPI exception handlers → converted to JSON responses
    - Covers: validation, database, auth, Gemini, RAG, rate-limit, upload errors

Usage:
    from app.core.exceptions import NotFoundError
    raise NotFoundError(detail="Case not found", context={"case_id": "BLR-24-991A"})
"""

from __future__ import annotations

from typing import Any, Dict, Optional


class BaseAppException(Exception):
    """
    Base exception for all application-specific errors.

    All custom exceptions inherit from this class, ensuring consistent
    error structure across the entire application.

    Attributes:
        status_code: HTTP status code to return
        error_code: Machine-readable error code for frontend consumption
        detail: Human-readable error message
        context: Additional context data for debugging
    """

    status_code: int = 500
    error_code: str = "INTERNAL_ERROR"
    detail: str = "An unexpected error occurred."

    def __init__(
        self,
        detail: Optional[str] = None,
        context: Optional[Dict[str, Any]] = None,
    ) -> None:
        self.detail = detail or self.__class__.detail
        self.context = context or {}
        super().__init__(self.detail)


# ── Validation Errors ──────────────────────────────────────────────


class ValidationError(BaseAppException):
    """Raised when request data fails validation."""

    status_code = 422
    error_code = "VALIDATION_ERROR"
    detail = "Request validation failed."


class BadRequestError(BaseAppException):
    """Raised when the request is malformed or missing required fields."""

    status_code = 400
    error_code = "BAD_REQUEST"
    detail = "The request is invalid."


# ── Authentication & Authorization Errors ──────────────────────────


class AuthenticationError(BaseAppException):
    """Raised when authentication fails (invalid credentials, expired token)."""

    status_code = 401
    error_code = "AUTHENTICATION_ERROR"
    detail = "Authentication failed. Please provide valid credentials."


class AuthorizationError(BaseAppException):
    """Raised when the user lacks permission for the requested action."""

    status_code = 403
    error_code = "AUTHORIZATION_ERROR"
    detail = "You do not have permission to perform this action."


class TokenExpiredError(AuthenticationError):
    """Raised when a JWT token has expired."""

    error_code = "TOKEN_EXPIRED"
    detail = "Access token has expired. Please log in again."


class InvalidTokenError(AuthenticationError):
    """Raised when a JWT token is malformed or invalid."""

    error_code = "INVALID_TOKEN"
    detail = "The provided token is invalid."


# ── Database Errors ────────────────────────────────────────────────


class DatabaseError(BaseAppException):
    """Raised when a database operation fails."""

    status_code = 500
    error_code = "DATABASE_ERROR"
    detail = "A database error occurred."


class NotFoundError(BaseAppException):
    """Raised when a requested resource is not found."""

    status_code = 404
    error_code = "NOT_FOUND"
    detail = "The requested resource was not found."


class DuplicateError(BaseAppException):
    """Raised when attempting to create a resource that already exists."""

    status_code = 409
    error_code = "DUPLICATE_RESOURCE"
    detail = "A resource with the same identifier already exists."


# ── Gemini AI Errors ───────────────────────────────────────────────


class GeminiError(BaseAppException):
    """Raised when a Gemini API call fails."""

    status_code = 502
    error_code = "GEMINI_ERROR"
    detail = "The AI service encountered an error."


class GeminiTimeoutError(GeminiError):
    """Raised when a Gemini API call times out."""

    error_code = "GEMINI_TIMEOUT"
    detail = "The AI service request timed out. Please try again."


class GeminiRateLimitError(GeminiError):
    """Raised when the Gemini API rate limit is exceeded."""

    status_code = 429
    error_code = "GEMINI_RATE_LIMIT"
    detail = "AI service rate limit exceeded. Please wait and try again."


class GeminiContentFilterError(GeminiError):
    """Raised when Gemini blocks content due to safety filters."""

    status_code = 400
    error_code = "GEMINI_CONTENT_FILTERED"
    detail = "The request was blocked by AI safety filters."


# ── RAG / Vector Search Errors ─────────────────────────────────────


class VectorSearchError(BaseAppException):
    """Raised when vector similarity search fails."""

    status_code = 500
    error_code = "VECTOR_SEARCH_ERROR"
    detail = "Vector search operation failed."


class VectorIndexError(BaseAppException):
    """Raised when vector indexing fails."""

    status_code = 500
    error_code = "VECTOR_INDEX_ERROR"
    detail = "Failed to index documents into the vector store."


class EmbeddingError(BaseAppException):
    """Raised when embedding generation fails."""

    status_code = 502
    error_code = "EMBEDDING_ERROR"
    detail = "Failed to generate embeddings for the provided content."


class DocumentProcessingError(BaseAppException):
    """Raised when document parsing or chunking fails."""

    status_code = 500
    error_code = "DOCUMENT_PROCESSING_ERROR"
    detail = "Failed to process the uploaded document."


# ── File Upload Errors ─────────────────────────────────────────────


class FileUploadError(BaseAppException):
    """Raised when a file upload operation fails."""

    status_code = 400
    error_code = "FILE_UPLOAD_ERROR"
    detail = "File upload failed."


class UnsupportedFileTypeError(FileUploadError):
    """Raised when an uploaded file type is not supported."""

    error_code = "UNSUPPORTED_FILE_TYPE"
    detail = "The uploaded file type is not supported."


class FileTooLargeError(FileUploadError):
    """Raised when an uploaded file exceeds the size limit."""

    status_code = 413
    error_code = "FILE_TOO_LARGE"
    detail = "The uploaded file exceeds the maximum allowed size."


# ── Rate Limiting ──────────────────────────────────────────────────


class RateLimitError(BaseAppException):
    """Raised when the API rate limit is exceeded."""

    status_code = 429
    error_code = "RATE_LIMIT_EXCEEDED"
    detail = "Too many requests. Please slow down."


# ── Report Generation Errors ──────────────────────────────────────


class ReportGenerationError(BaseAppException):
    """Raised when report generation fails."""

    status_code = 500
    error_code = "REPORT_GENERATION_ERROR"
    detail = "Failed to generate the intelligence report."
