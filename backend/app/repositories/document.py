"""
Crime Intelligence Platform — Document Index Repository

Data access layer for document upload tracking and vector index metadata.
"""

from __future__ import annotations

from typing import Any, List, Optional

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.document import DocumentIndex
from app.repositories.base import BaseRepository


class DocumentIndexRepository(BaseRepository[DocumentIndex, Any, Any]):
    """Repository handling database operations for uploaded document indexing."""

    def __init__(self) -> None:
        super().__init__(DocumentIndex)

    async def get_by_filename(self, db: AsyncSession, filename: str) -> Optional[DocumentIndex]:
        """Fetch document index by filename."""
        return await self.get_by_field(db, "filename", filename)

    async def list_pending(self, db: AsyncSession) -> List[DocumentIndex]:
        """Fetch all documents queued for vector indexing."""
        stmt = select(DocumentIndex).where(DocumentIndex.status == "pending")
        res = await db.execute(stmt)
        return list(res.scalars().all())

    async def update_indexing_status(
        self,
        db: AsyncSession,
        doc_id: int,
        status: str,
        chunk_count: int = 0,
        error_message: Optional[str] = None,
    ) -> Optional[DocumentIndex]:
        """Update vector indexing status for a document."""
        doc = await self.get(db, doc_id)
        if not doc:
            return None

        doc.status = status
        doc.chunk_count = chunk_count
        if error_message:
            doc.error_message = error_message

        db.add(doc)
        await db.flush()
        await db.refresh(doc)
        return doc


document_index_repository = DocumentIndexRepository()
