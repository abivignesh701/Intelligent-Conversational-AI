"""
Crime Intelligence Platform — Database Models Package

Exports all SQLAlchemy ORM models so they are registered with Base.metadata.
"""

from app.db.base_class import Base
from app.models.user import User
from app.models.crime import (
    District,
    PoliceStation,
    CrimeHead,
    CrimeSubHead,
    CaseMaster,
    Accused,
    Victim,
    Complainant,
    Chargesheet,
    ArrestRecord,
)
from app.models.chat import ChatSession, ChatMessage
from app.models.document import DocumentIndex

__all__ = [
    "Base",
    "User",
    "District",
    "PoliceStation",
    "CrimeHead",
    "CrimeSubHead",
    "CaseMaster",
    "Accused",
    "Victim",
    "Complainant",
    "Chargesheet",
    "ArrestRecord",
    "ChatSession",
    "ChatMessage",
    "DocumentIndex",
]
