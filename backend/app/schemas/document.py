"""
Crime Intelligence Platform — Document & Vector Indexing Schemas

Pydantic models for file uploads, index status tracking, and vector re-indexing.
"""

from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field


class DocumentUploadResponse(BaseModel):
    """File upload response model."""

    id: int
    filename: str
    file_type: str
    file_size_bytes: int
    status: str = Field(description="pending, processing, indexed, failed")
    message: str = "File uploaded successfully and queued for indexing."


class DocumentIndexStatusResponse(BaseModel):
    """Document indexing status response model."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    filename: str
    file_type: str
    file_path: str
    file_size_bytes: int
    chunk_count: int
    status: str
    error_message: Optional[str] = None
    created_at: datetime
    updated_at: datetime


class VectorReindexResponse(BaseModel):
    """Vector database re-indexing response payload."""

    status: str = "success"
    message: str = "Vector index successfully updated."
    total_documents: int = 0
    total_chunks: int = 0
    vector_dimension: int = 768
