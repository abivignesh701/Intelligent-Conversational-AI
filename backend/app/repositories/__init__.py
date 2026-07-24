"""
Crime Intelligence Platform — Repositories Package

Exports all repository singletons and classes for dependency injection across business services.
"""

from app.repositories.base import BaseRepository
from app.repositories.user import UserRepository, user_repository
from app.repositories.crime import (
    CaseRepository,
    AccusedRepository,
    VictimRepository,
    ComplainantRepository,
    PoliceStationRepository,
    DistrictRepository,
    case_repository,
    accused_repository,
    victim_repository,
    complainant_repository,
    police_station_repository,
    district_repository,
)
from app.repositories.chat import (
    ChatSessionRepository,
    ChatMessageRepository,
    chat_session_repository,
    chat_message_repository,
)
from app.repositories.document import DocumentIndexRepository, document_index_repository

__all__ = [
    "BaseRepository",
    "UserRepository",
    "user_repository",
    "CaseRepository",
    "case_repository",
    "AccusedRepository",
    "accused_repository",
    "VictimRepository",
    "victim_repository",
    "ComplainantRepository",
    "complainant_repository",
    "PoliceStationRepository",
    "police_station_repository",
    "DistrictRepository",
    "district_repository",
    "ChatSessionRepository",
    "chat_session_repository",
    "ChatMessageRepository",
    "chat_message_repository",
    "DocumentIndexRepository",
    "document_index_repository",
]
