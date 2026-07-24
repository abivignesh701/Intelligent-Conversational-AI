"""
Crime Intelligence Platform — FIR Cases API Endpoints
"""

from __future__ import annotations

from typing import List, Optional

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import require_role
from app.db.session import get_db
from app.schemas.crime import (
    CaseMasterCreate,
    CaseMasterResponse,
    CrimeSearchFilter,
)
from app.core.responses import PaginatedResponse, paginated_response
from app.services.crime_service import crime_service

router = APIRouter(prefix="/cases", tags=["FIR Cases"])


@router.get(
    "",
    summary="List & Filter FIR Cases",
    description="Multi-parameter search and filtering over FIR case records.",
)
async def list_cases(
    query: Optional[str] = Query(None, description="Search text in brief facts or FIR"),
    district: Optional[str] = Query(None, description="District filter"),
    police_station: Optional[str] = Query(None, description="Police station filter"),
    category: Optional[str] = Query(None, description="Crime category filter"),
    status: Optional[str] = Query(None, description="Case status filter"),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    db: AsyncSession = Depends(get_db),
):
    filters = CrimeSearchFilter(
        query=query,
        district=district,
        police_station=police_station,
        category=category,
        status=status,
        page=page,
        page_size=page_size,
    )
    cases, total = await crime_service.search_cases(db, filters)
    return paginated_response(
        data=[c.model_dump() for c in cases],
        page=page,
        page_size=page_size,
        total_items=total,
        message="Cases retrieved successfully.",
    )


@router.get(
    "/{fir_number:path}",
    response_model=CaseMasterResponse,
    summary="Get FIR Case Detail",
    description="Fetch comprehensive FIR case record with accused and victim lists.",
)
async def get_case_by_fir(
    fir_number: str,
    db: AsyncSession = Depends(get_db),
) -> CaseMasterResponse:
    return await crime_service.get_case_by_fir(db, fir_number)


@router.post(
    "",
    response_model=CaseMasterResponse,
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(require_role(["admin", "analyst"]))],
    summary="Create New FIR Case",
    description="Create a new First Information Report case record.",
)
async def create_case(
    case_in: CaseMasterCreate,
    db: AsyncSession = Depends(get_db),
) -> CaseMasterResponse:
    return await crime_service.create_case(db, case_in)
