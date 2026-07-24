"""
Crime Intelligence Platform — Document Upload Business Service

Business logic for registering uploaded files (CSV, PDF, DOCX, TXT, Images) and queueing them for vector indexing.
"""

from __future__ import annotations

from typing import List

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import NotFoundError
from app.repositories.document import document_index_repository
from app.schemas.document import DocumentIndexStatusResponse, DocumentUploadResponse


class DocumentService:
    """Business service handling file upload registry and index status tracking."""

    def __init__(self) -> None:
        self.doc_repo = document_index_repository

    async def register_upload(
        self,
        db: AsyncSession,
        filename: str,
        file_type: str,
        file_path: str,
        file_size_bytes: int,
    ) -> DocumentUploadResponse:
        """Register an uploaded document in database registry."""
        doc = await self.doc_repo.create(
            db,
            {
                "filename": filename,
                "file_type": file_type,
                "file_path": file_path,
                "file_size_bytes": file_size_bytes,
                "status": "pending",
            },
        )

        return DocumentUploadResponse(
            id=doc.id,
            filename=doc.filename,
            file_type=doc.file_type,
            file_size_bytes=doc.file_size_bytes,
            status=doc.status,
            message=f"Document '{filename}' registered and queued for vector indexing.",
        )

    async def get_document_status(self, db: AsyncSession, doc_id: int) -> DocumentIndexStatusResponse:
        """Fetch indexing status for a document."""
        doc = await self.doc_repo.get(db, doc_id)
        if not doc:
            raise NotFoundError(
                detail=f"Document index record #{doc_id} not found.",
                context={"doc_id": doc_id},
            )
        return DocumentIndexStatusResponse.model_validate(doc)

    async def list_all_documents(self, db: AsyncSession) -> List[DocumentIndexStatusResponse]:
        """List all tracked document upload records."""
        docs = await self.doc_repo.get_multi(db, skip=0, limit=100)
        return [DocumentIndexStatusResponse.model_validate(d) for d in docs]


document_service = DocumentService()
