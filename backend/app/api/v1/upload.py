"""
Crime Intelligence Platform — File Upload API Endpoints
"""

from __future__ import annotations

from pathlib import Path
import aiofiles
from fastapi import APIRouter, Depends, File, UploadFile, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import get_settings
from app.core.exceptions import FileTooLargeError, UnsupportedFileTypeError
from app.db.session import get_db
from app.schemas.document import DocumentIndexStatusResponse, DocumentUploadResponse
from app.services.document_service import document_service

router = APIRouter(prefix="/upload", tags=["File Uploads"])
settings = get_settings()

ALLOWED_EXTENSIONS = {".csv", ".pdf", ".docx", ".txt", ".png", ".jpg", ".jpeg"}
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50 MB limit


@router.post(
    "",
    response_model=DocumentUploadResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Upload Document for RAG Indexing",
    description="Upload CSV datasets, PDF legal acts, DOCX briefings, or images and queue for RAG vector indexing.",
)
async def upload_file(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
) -> DocumentUploadResponse:
    filename = file.filename or "uploaded_file"
    file_ext = Path(filename).suffix.lower()

    if file_ext not in ALLOWED_EXTENSIONS:
        raise UnsupportedFileTypeError(
            detail=f"File extension '{file_ext}' is not supported. Permitted types: {ALLOWED_EXTENSIONS}."
        )

    upload_dir = settings.upload_path
    upload_dir.mkdir(parents=True, exist_ok=True)
    target_path = upload_dir / filename

    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise FileTooLargeError(detail="Uploaded file size exceeds the 50 MB limit.")

    async with aiofiles.open(target_path, "wb") as out_file:
        await out_file.write(content)

    file_type = file_ext.replace(".", "")
    return await document_service.register_upload(
        db,
        filename=filename,
        file_type=file_type,
        file_path=str(target_path),
        file_size_bytes=len(content),
    )


@router.get(
    "/status/{doc_id}",
    response_model=DocumentIndexStatusResponse,
    summary="Get Document Indexing Status",
    description="Check the indexing status and chunk count of an uploaded document.",
)
async def get_upload_status(
    doc_id: int,
    db: AsyncSession = Depends(get_db),
) -> DocumentIndexStatusResponse:
    return await document_service.get_document_status(db, doc_id)
