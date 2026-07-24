"""
Crime Intelligence Platform — Crime Domain Repositories

Specialized repositories for CaseMaster (FIRs), Accused, Victims, Complainants,
Police Stations, and Districts.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional, Tuple

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.crime import (
    Accused,
    CaseMaster,
    Complainant,
    District,
    PoliceStation,
    Victim,
)
from app.repositories.base import BaseRepository
from app.schemas.crime import (
    AccusedCreate,
    AccusedUpdate,
    CaseMasterCreate,
    CaseMasterUpdate,
    ComplainantCreate,
    VictimCreate,
)


class CaseRepository(BaseRepository[CaseMaster, CaseMasterCreate, CaseMasterUpdate]):
    """Repository handling database operations for FIR cases."""

    def __init__(self) -> None:
        super().__init__(CaseMaster)

    async def get_by_fir_number(
        self,
        db: AsyncSession,
        fir_number: str,
        include_relationships: bool = True,
    ) -> Optional[CaseMaster]:
        """Fetch case by unique FIR number, optionally preloading relationships."""
        query = select(CaseMaster).where(CaseMaster.fir_number == fir_number)
        if include_relationships:
            query = query.options(
                selectinload(CaseMaster.accused_list),
                selectinload(CaseMaster.victim_list),
                selectinload(CaseMaster.complainant_list),
            )
        result = await db.execute(query)
        return result.scalar_one_or_none()

    async def search_cases(
        self,
        db: AsyncSession,
        query_text: Optional[str] = None,
        district: Optional[str] = None,
        police_station: Optional[str] = None,
        category: Optional[str] = None,
        status: Optional[str] = None,
        skip: int = 0,
        limit: int = 20,
    ) -> Tuple[List[CaseMaster], int]:
        """Filter and search FIR cases with pagination."""
        stmt = select(CaseMaster).options(
            selectinload(CaseMaster.accused_list),
            selectinload(CaseMaster.victim_list),
            selectinload(CaseMaster.complainant_list),
        )
        count_stmt = select(func.count()).select_from(CaseMaster)

        if query_text:
            pattern = f"%{query_text}%"
            stmt = stmt.where(
                (CaseMaster.fir_number.ilike(pattern))
                | (CaseMaster.brief_facts.ilike(pattern))
                | (CaseMaster.act_section.ilike(pattern))
            )
            count_stmt = count_stmt.where(
                (CaseMaster.fir_number.ilike(pattern))
                | (CaseMaster.brief_facts.ilike(pattern))
                | (CaseMaster.act_section.ilike(pattern))
            )

        if district:
            stmt = stmt.where(CaseMaster.district_name.ilike(f"%{district}%"))
            count_stmt = count_stmt.where(CaseMaster.district_name.ilike(f"%{district}%"))

        if police_station:
            stmt = stmt.where(CaseMaster.police_station_name.ilike(f"%{police_station}%"))
            count_stmt = count_stmt.where(CaseMaster.police_station_name.ilike(f"%{police_station}%"))

        if category:
            stmt = stmt.where(CaseMaster.crime_head_name.ilike(f"%{category}%"))
            count_stmt = count_stmt.where(CaseMaster.crime_head_name.ilike(f"%{category}%"))

        if status:
            stmt = stmt.where(CaseMaster.status == status)
            count_stmt = count_stmt.where(CaseMaster.status == status)

        stmt = stmt.order_by(CaseMaster.created_at.desc()).offset(skip).limit(limit)

        total_res = await db.execute(count_stmt)
        total = total_res.scalar() or 0

        res = await db.execute(stmt)
        cases = list(res.scalars().all())

        return cases, total


class AccusedRepository(BaseRepository[Accused, AccusedCreate, AccusedUpdate]):
    """Repository handling database operations for Suspects and Accused persons."""

    def __init__(self) -> None:
        super().__init__(Accused)

    async def get_by_fir(self, db: AsyncSession, fir_number: str) -> List[Accused]:
        """Fetch all accused persons linked to an FIR."""
        stmt = select(Accused).where(Accused.fir_number == fir_number)
        result = await db.execute(stmt)
        return list(result.scalars().all())

    async def find_associates(
        self,
        db: AsyncSession,
        accused_name: str,
        limit: int = 10,
    ) -> List[Accused]:
        """Discover co-accused associates linked by shared FIR cases."""
        subquery = select(Accused.fir_number).where(Accused.name.ilike(f"%{accused_name}%"))
        stmt = (
            select(Accused)
            .where(Accused.fir_number.in_(subquery))
            .where(~Accused.name.ilike(f"%{accused_name}%"))
            .limit(limit)
        )
        result = await db.execute(stmt)
        return list(result.scalars().all())


class VictimRepository(BaseRepository[Victim, VictimCreate, VictimCreate]):
    def __init__(self) -> None:
        super().__init__(Victim)


class ComplainantRepository(BaseRepository[Complainant, ComplainantCreate, ComplainantCreate]):
    def __init__(self) -> None:
        super().__init__(Complainant)


class PoliceStationRepository(BaseRepository[PoliceStation, Any, Any]):
    def __init__(self) -> None:
        super().__init__(PoliceStation)


class DistrictRepository(BaseRepository[District, Any, Any]):
    def __init__(self) -> None:
        super().__init__(District)


case_repository = CaseRepository()
accused_repository = AccusedRepository()
victim_repository = VictimRepository()
complainant_repository = ComplainantRepository()
police_station_repository = PoliceStationRepository()
district_repository = DistrictRepository()
