"""
Crime Intelligence Platform — Criminals & Suspects API Endpoints
"""

from __future__ import annotations

from typing import List, Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.repositories.crime import accused_repository
from app.schemas.crime import AccusedResponse
from app.services.crime_service import crime_service

router = APIRouter(prefix="/criminals", tags=["Criminals & Suspects"])


@router.get(
    "",
    response_model=List[AccusedResponse],
    summary="List & Search Suspects",
    description="Search accused suspects by name, alias, phone, or status.",
)
async def list_criminals(
    query: Optional[str] = Query(None, description="Name or alias search term"),
    fir_number: Optional[str] = Query(None, description="Filter by FIR number"),
    limit: int = Query(20, ge=1, le=100),
    db: AsyncSession = Depends(get_db),
) -> List[AccusedResponse]:
    if fir_number:
        accused_list = await accused_repository.get_by_fir(db, fir_number)
    elif query:
        accused_list = await accused_repository.search_text(db, "name", query, limit=limit)
    else:
        accused_list = await accused_repository.get_multi(db, skip=0, limit=limit)

    return [AccusedResponse.model_validate(a) for a in accused_list]


@router.get(
    "/{name}/associates",
    response_model=List[AccusedResponse],
    summary="Get Criminal Associates",
    description="Discover co-accused associates connected through shared FIR cases.",
)
async def get_criminal_associates(
    name: str,
    db: AsyncSession = Depends(get_db),
) -> List[AccusedResponse]:
    return await crime_service.get_accused_associates(db, name)
