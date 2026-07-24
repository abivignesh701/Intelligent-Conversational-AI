"""
Crime Intelligence Platform — Services Package

Exports all business services singletons.
"""

from app.services.auth_service import AuthService, auth_service
from app.services.crime_service import CrimeService, crime_service
from app.services.chat_service import ChatMemoryService, chat_memory_service
from app.services.document_service import DocumentService, document_service
from app.services.gemini_service import GeminiService, gemini_service
from app.services.prompt_builder import PromptBuilder, prompt_builder
from app.services.network_service import NetworkAnalysisService, network_service
from app.services.report_service import ReportGenerationService, report_service

__all__ = [
    "AuthService",
    "auth_service",
    "CrimeService",
    "crime_service",
    "ChatMemoryService",
    "chat_memory_service",
    "DocumentService",
    "document_service",
    "GeminiService",
    "gemini_service",
    "PromptBuilder",
    "prompt_builder",
    "NetworkAnalysisService",
    "network_service",
    "ReportGenerationService",
    "report_service",
]
