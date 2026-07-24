"""
Crime Intelligence Platform — Pydantic Schemas Package

Exports all request/response validation schemas across the application.
"""

from app.schemas.auth import (
    UserLogin,
    UserCreate,
    UserUpdate,
    UserResponse,
    Token,
)
from app.schemas.crime import (
    CaseMasterBase,
    CaseMasterCreate,
    CaseMasterUpdate,
    CaseMasterResponse,
    AccusedBase,
    AccusedCreate,
    AccusedUpdate,
    AccusedResponse,
    VictimBase,
    VictimCreate,
    VictimResponse,
    ComplainantBase,
    ComplainantCreate,
    ComplainantResponse,
    CrimeSearchFilter,
    DistrictResponse,
    PoliceStationResponse,
)
from app.schemas.chat import (
    EvidenceItem,
    ChatResponseData,
    RAGQueryRequest,
    RAGSearchRequest,
    RAGSearchResponse,
    ChatMessageCreate,
    ChatMessageResponse,
    ChatSessionCreate,
    ChatSessionResponse,
    ChatSessionDetail,
)
from app.schemas.network import (
    NetworkNodeSchema,
    NetworkEdgeSchema,
    NetworkGraphRequest,
    NetworkGraphResponse,
)
from app.schemas.report import (
    ReportGenerationRequest,
    ReportGenerationResponse,
)
from app.schemas.document import (
    DocumentUploadResponse,
    DocumentIndexStatusResponse,
    VectorReindexResponse,
)

__all__ = [
    # Auth
    "UserLogin",
    "UserCreate",
    "UserUpdate",
    "UserResponse",
    "Token",
    # Crime
    "CaseMasterBase",
    "CaseMasterCreate",
    "CaseMasterUpdate",
    "CaseMasterResponse",
    "AccusedBase",
    "AccusedCreate",
    "AccusedUpdate",
    "AccusedResponse",
    "VictimBase",
    "VictimCreate",
    "VictimResponse",
    "ComplainantBase",
    "ComplainantCreate",
    "ComplainantResponse",
    "CrimeSearchFilter",
    "DistrictResponse",
    "PoliceStationResponse",
    # Chat & RAG
    "EvidenceItem",
    "ChatResponseData",
    "RAGQueryRequest",
    "RAGSearchRequest",
    "RAGSearchResponse",
    "ChatMessageCreate",
    "ChatMessageResponse",
    "ChatSessionCreate",
    "ChatSessionResponse",
    "ChatSessionDetail",
    # Network
    "NetworkNodeSchema",
    "NetworkEdgeSchema",
    "NetworkGraphRequest",
    "NetworkGraphResponse",
    # Report
    "ReportGenerationRequest",
    "ReportGenerationResponse",
    # Document
    "DocumentUploadResponse",
    "DocumentIndexStatusResponse",
    "VectorReindexResponse",
]
