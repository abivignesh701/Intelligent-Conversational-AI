"""
Crime Intelligence Platform — Crime Domain Models

Defines ORM models for Karnataka State Police FIR records, suspects, victims,
complainants, chargesheets, arrests, districts, stations, and crime classifications.
"""

from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from sqlalchemy import DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base_class import Base, PrimaryKeyMixin, TimestampMixin


class District(Base, PrimaryKeyMixin, TimestampMixin):
    """District organizational unit."""

    __tablename__ = "districts"

    name: Mapped[str] = mapped_column(String(100), unique=True, nullable=False, index=True)
    code: Mapped[str] = mapped_column(String(20), unique=True, nullable=False)
    zone: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)

    stations: Mapped[List[PoliceStation]] = relationship("PoliceStation", back_populates="district")


class PoliceStation(Base, PrimaryKeyMixin, TimestampMixin):
    """Police Station unit under a district."""

    __tablename__ = "police_stations"

    name: Mapped[str] = mapped_column(String(150), nullable=False, index=True)
    code: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    district_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("districts.id", ondelete="SET NULL"),
        nullable=True,
    )
    location: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    latitude: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    longitude: Mapped[Optional[float]] = mapped_column(Float, nullable=True)

    district: Mapped[Optional[District]] = relationship("District", back_populates="stations")
    cases: Mapped[List[CaseMaster]] = relationship("CaseMaster", back_populates="police_station")


class CrimeHead(Base, PrimaryKeyMixin, TimestampMixin):
    """Major crime category classification (e.g., Cyber, Narcotics, Theft)."""

    __tablename__ = "crime_heads"

    name: Mapped[str] = mapped_column(String(150), unique=True, nullable=False, index=True)

    subheads: Mapped[List[CrimeSubHead]] = relationship("CrimeSubHead", back_populates="crime_head")


class CrimeSubHead(Base, PrimaryKeyMixin, TimestampMixin):
    """Specific sub-classification of a crime head."""

    __tablename__ = "crime_subheads"

    name: Mapped[str] = mapped_column(String(150), nullable=False, index=True)
    crime_head_id: Mapped[int] = mapped_column(
        ForeignKey("crime_heads.id", ondelete="CASCADE"),
        nullable=False,
    )

    crime_head: Mapped[CrimeHead] = relationship("CrimeHead", back_populates="subheads")


class CaseMaster(Base, PrimaryKeyMixin, TimestampMixin):
    """
    Primary FIR & Case Record Model.
    Represents an official First Information Report filed in Karnataka State Police.
    """

    __tablename__ = "case_masters"

    fir_number: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        index=True,
        nullable=False,
    )
    district_name: Mapped[Optional[str]] = mapped_column(String(100), nullable=True, index=True)
    police_station_name: Mapped[Optional[str]] = mapped_column(String(150), nullable=True, index=True)
    police_station_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("police_stations.id", ondelete="SET NULL"),
        nullable=True,
    )
    fir_date: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    crime_head_name: Mapped[Optional[str]] = mapped_column(String(150), nullable=True, index=True)
    crime_subhead_name: Mapped[Optional[str]] = mapped_column(String(150), nullable=True)
    act_section: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    incident_location: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    status: Mapped[str] = mapped_column(String(50), default="Active", nullable=False, index=True)
    brief_facts: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    police_station: Mapped[Optional[PoliceStation]] = relationship("PoliceStation", back_populates="cases")
    accused_list: Mapped[List[Accused]] = relationship("Accused", back_populates="case", cascade="all, delete-orphan")
    victim_list: Mapped[List[Victim]] = relationship("Victim", back_populates="case", cascade="all, delete-orphan")
    complainant_list: Mapped[List[Complainant]] = relationship("Complainant", back_populates="case", cascade="all, delete-orphan")
    chargesheets: Mapped[List[Chargesheet]] = relationship("Chargesheet", back_populates="case", cascade="all, delete-orphan")
    arrests: Mapped[List[ArrestRecord]] = relationship("ArrestRecord", back_populates="case", cascade="all, delete-orphan")


class Accused(Base, PrimaryKeyMixin, TimestampMixin):
    """Criminal / Suspect details linked to a case."""

    __tablename__ = "accused_records"

    case_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("case_masters.id", ondelete="CASCADE"),
        nullable=True,
    )
    fir_number: Mapped[str] = mapped_column(String(100), index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(200), index=True, nullable=False)
    alias: Mapped[Optional[str]] = mapped_column(String(150), nullable=True, index=True)
    age: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    gender: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    address: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    phone: Mapped[Optional[str]] = mapped_column(String(50), nullable=True, index=True)
    status: Mapped[Optional[str]] = mapped_column(String(50), nullable=True, index=True)  # Arrested, Absconding, Bailed
    arrest_date: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)

    case: Mapped[Optional[CaseMaster]] = relationship("CaseMaster", back_populates="accused_list")


class Victim(Base, PrimaryKeyMixin, TimestampMixin):
    """Victim details linked to a case."""

    __tablename__ = "victim_records"

    case_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("case_masters.id", ondelete="CASCADE"),
        nullable=True,
    )
    fir_number: Mapped[str] = mapped_column(String(100), index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    age: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    gender: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    phone: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)
    address: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    injury_type: Mapped[Optional[str]] = mapped_column(String(150), nullable=True)

    case: Mapped[Optional[CaseMaster]] = relationship("CaseMaster", back_populates="victim_list")


class Complainant(Base, PrimaryKeyMixin, TimestampMixin):
    """Informant / Complainant details linked to a case."""

    __tablename__ = "complainant_records"

    case_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("case_masters.id", ondelete="CASCADE"),
        nullable=True,
    )
    fir_number: Mapped[str] = mapped_column(String(100), index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    age: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    gender: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    phone: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)
    address: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    case: Mapped[Optional[CaseMaster]] = relationship("CaseMaster", back_populates="complainant_list")


class Chargesheet(Base, PrimaryKeyMixin, TimestampMixin):
    """Court chargesheet filing record."""

    __tablename__ = "chargesheet_records"

    chargesheet_number: Mapped[str] = mapped_column(String(100), unique=True, index=True, nullable=False)
    case_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("case_masters.id", ondelete="CASCADE"),
        nullable=True,
    )
    fir_number: Mapped[str] = mapped_column(String(100), index=True, nullable=False)
    chargesheet_date: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    court_name: Mapped[Optional[str]] = mapped_column(String(200), nullable=True)
    status: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)

    case: Mapped[Optional[CaseMaster]] = relationship("CaseMaster", back_populates="chargesheets")


class ArrestRecord(Base, PrimaryKeyMixin, TimestampMixin):
    """Arrest & surrender event record."""

    __tablename__ = "arrest_records"

    case_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("case_masters.id", ondelete="CASCADE"),
        nullable=True,
    )
    fir_number: Mapped[str] = mapped_column(String(100), index=True, nullable=False)
    accused_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("accused_records.id", ondelete="SET NULL"),
        nullable=True,
    )
    arrest_date: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    arrest_location: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    arresting_officer: Mapped[Optional[str]] = mapped_column(String(200), nullable=True)

    case: Mapped[Optional[CaseMaster]] = relationship("CaseMaster", back_populates="arrests")
