"""
Crime Intelligence Platform — Report Generation API Endpoints
"""

from __future__ import annotations

from pathlib import Path
from fastapi import APIRouter, Depends, status
from fastapi.responses import FileResponse
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import NotFoundError
from app.db.session import get_db
from app.schemas.report import ReportGenerationRequest, ReportGenerationResponse
from app.services.report_service import report_service

router = APIRouter(prefix="/report", tags=["Report Generation"])


@router.post(
    "",
    response_model=ReportGenerationResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Generate Intelligence Report",
    description="Generate structured law enforcement briefing, case summary, or suspect dossier report.",
)
async def generate_report(
    request: ReportGenerationRequest,
    db: AsyncSession = Depends(get_db),
) -> ReportGenerationResponse:
    return await report_service.generate_report(db, request)


@router.get(
    "/download/{file_name}",
    response_class=FileResponse,
    summary="Download Generated Report",
    description="Download generated report file (.md / .pdf).",
)
async def download_report(file_name: str) -> FileResponse:
    reports_dir = Path("data/reports")
    file_path = reports_dir / file_name

    if not file_path.exists():
        raise NotFoundError(detail=f"Report file '{file_name}' not found.")

    return FileResponse(
        path=str(file_path),
        filename=file_name,
        media_type="text/markdown",
    )
