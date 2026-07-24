"""
Crime Intelligence Platform — Criminal Network Analysis API Endpoints
"""

from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.schemas.network import NetworkGraphRequest, NetworkGraphResponse
from app.services.network_service import network_service

router = APIRouter(prefix="/network", tags=["Criminal Network Analysis"])


@router.get(
    "",
    response_model=NetworkGraphResponse,
    summary="Get Criminal Network Graph",
    description="Retrieve 2D/3D criminal network graph payload with nodes, edges, 3D positions, and centralities.",
)
async def get_network_graph(
    suspect_id: Optional[str] = Query(None, description="Center graph on suspect ID"),
    fir_number: Optional[str] = Query(None, description="Center graph on FIR number"),
    depth: int = Query(2, ge=1, le=4),
    db: AsyncSession = Depends(get_db),
) -> NetworkGraphResponse:
    request = NetworkGraphRequest(
        suspect_id=suspect_id,
        fir_number=fir_number,
        depth=depth,
    )
    return await network_service.generate_network_graph(db, request)


@router.post(
    "/analyze",
    response_model=NetworkGraphResponse,
    summary="Analyze Criminal Relationship Graph",
    description="Execute custom graph relationship analysis with depth and confidence filters.",
)
async def analyze_network_graph(
    request: NetworkGraphRequest,
    db: AsyncSession = Depends(get_db),
) -> NetworkGraphResponse:
    return await network_service.generate_network_graph(db, request)
