"""
Crime Intelligence Platform — Crime Domain Schemas

Pydantic schemas for FIR Case Master, Accused, Victims, Complainants, Police Stations,
Districts, and Search/Filter requests.
"""

from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field


# ── Accused Schemas ───────────────────────────────────────────────


class AccusedBase(BaseModel):
    fir_number: str
    name: str
    alias: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None
    address: Optional[str] = None
    phone: Optional[str] = None
    status: Optional[str] = "Absconding"
    arrest_date: Optional[datetime] = None


class AccusedCreate(AccusedBase):
    case_id: Optional[int] = None


class AccusedUpdate(BaseModel):
    name: Optional[str] = None
    alias: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None
    address: Optional[str] = None
    phone: Optional[str] = None
    status: Optional[str] = None
    arrest_date: Optional[datetime] = None


class AccusedResponse(AccusedBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    case_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime


# ── Victim Schemas ────────────────────────────────────────────────


class VictimBase(BaseModel):
    fir_number: str
    name: str
    age: Optional[int] = None
    gender: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    injury_type: Optional[str] = None


class VictimCreate(VictimBase):
    case_id: Optional[int] = None


class VictimResponse(VictimBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    case_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime


# ── Complainant Schemas ───────────────────────────────────────────


class ComplainantBase(BaseModel):
    fir_number: str
    name: str
    age: Optional[int] = None
    gender: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None


class ComplainantCreate(ComplainantBase):
    case_id: Optional[int] = None


class ComplainantResponse(ComplainantBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    case_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime


# ── Case Master (FIR) Schemas ─────────────────────────────────────


class CaseMasterBase(BaseModel):
    fir_number: str = Field(description="Unique FIR Number (e.g. FIR-2024-BLR-0091)")
    district_name: Optional[str] = None
    police_station_name: Optional[str] = None
    police_station_id: Optional[int] = None
    fir_date: Optional[datetime] = None
    crime_head_name: Optional[str] = None
    crime_subhead_name: Optional[str] = None
    act_section: Optional[str] = None
    incident_location: Optional[str] = None
    status: str = Field(default="Active", description="Case status: Active, Closed, Critical")
    brief_facts: Optional[str] = Field(default=None, description="Detailed brief facts of the case")


class CaseMasterCreate(CaseMasterBase):
    pass


class CaseMasterUpdate(BaseModel):
    district_name: Optional[str] = None
    police_station_name: Optional[str] = None
    police_station_id: Optional[int] = None
    fir_date: Optional[datetime] = None
    crime_head_name: Optional[str] = None
    crime_subhead_name: Optional[str] = None
    act_section: Optional[str] = None
    incident_location: Optional[str] = None
    status: Optional[str] = None
    brief_facts: Optional[str] = None


class CaseMasterResponse(CaseMasterBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    accused_list: List[AccusedResponse] = Field(default_factory=list)
    victim_list: List[VictimResponse] = Field(default_factory=list)
    complainant_list: List[ComplainantResponse] = Field(default_factory=list)
    created_at: datetime
    updated_at: datetime


# ── Search & Filter Schemas ───────────────────────────────────────


class CrimeSearchFilter(BaseModel):
    query: Optional[str] = Field(default=None, description="Free text query to match in brief facts or FIR")
    district: Optional[str] = Field(default=None, description="Filter by district name")
    police_station: Optional[str] = Field(default=None, description="Filter by police station name")
    category: Optional[str] = Field(default=None, description="Filter by crime head (Cyber, Theft, Narcotics, etc)")
    status: Optional[str] = Field(default=None, description="Filter by case status (Active, Closed)")
    date_from: Optional[datetime] = Field(default=None, description="Start date filter")
    date_to: Optional[datetime] = Field(default=None, description="End date filter")
    page: int = Field(default=1, ge=1)
    page_size: int = Field(default=20, ge=1, le=100)


# ── Lookup Schemas ────────────────────────────────────────────────


class DistrictResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    code: str
    zone: Optional[str] = None


class PoliceStationResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    code: str
    district_id: Optional[int] = None
    location: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
