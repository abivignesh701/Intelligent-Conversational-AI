"""
Crime Intelligence Platform — Crime Business Service

Business logic for FIR cases, criminal search, filters, and relationship discovery.
"""

from __future__ import annotations

from typing import List, Tuple

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import DuplicateError, NotFoundError
from app.models.crime import Accused, CaseMaster
from app.repositories.crime import accused_repository, case_repository
from app.schemas.crime import (
    AccusedResponse,
    CaseMasterCreate,
    CaseMasterResponse,
    CrimeSearchFilter,
)


class CrimeService:
    """Business service handling crime records, FIR queries, and suspect discovery."""

    def __init__(self) -> None:
        self.case_repo = case_repository
        self.accused_repo = accused_repository

    async def get_case_by_fir(self, db: AsyncSession, fir_number: str) -> CaseMasterResponse:
        """Fetch case details by FIR number."""
        case = await self.case_repo.get_by_fir_number(db, fir_number, include_relationships=True)
        if not case:
            raise NotFoundError(
                detail=f"FIR case '{fir_number}' was not found in database.",
                context={"fir_number": fir_number},
            )
        return CaseMasterResponse.model_validate(case)

    async def search_cases(
        self,
        db: AsyncSession,
        filters: CrimeSearchFilter,
    ) -> Tuple[List[CaseMasterResponse], int]:
        """Search and filter FIR cases with pagination metadata."""
        skip = (filters.page - 1) * filters.page_size
        cases, total = await self.case_repo.search_cases(
            db,
            query_text=filters.query,
            district=filters.district,
            police_station=filters.police_station,
            category=filters.category,
            status=filters.status,
            skip=skip,
            limit=filters.page_size,
        )

        response_cases = [CaseMasterResponse.model_validate(c) for c in cases]
        return response_cases, total

    async def create_case(self, db: AsyncSession, case_in: CaseMasterCreate) -> CaseMasterResponse:
        """Create a new FIR case record and return loaded response."""
        existing = await self.case_repo.get_by_fir_number(db, case_in.fir_number, include_relationships=False)
        if existing:
            raise DuplicateError(
                detail=f"Case with FIR number '{case_in.fir_number}' already exists.",
                context={"fir_number": case_in.fir_number},
            )

        case = await self.case_repo.create(db, case_in)
        # Fetch with eager-loaded relationships to avoid async MissingGreenlet
        loaded_case = await self.case_repo.get_by_fir_number(db, case.fir_number, include_relationships=True)
        return CaseMasterResponse.model_validate(loaded_case or case)

    async def get_accused_associates(self, db: AsyncSession, accused_name: str) -> List[AccusedResponse]:
        """Discover criminal associates linked by shared FIR cases."""
        associates = await self.accused_repo.find_associates(db, accused_name)
        return [AccusedResponse.model_validate(a) for a in associates]


crime_service = CrimeService()
