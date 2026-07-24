"""
Module 5 Verification Tests
Tests Pydantic schemas validation, defaults, and serialization.
"""

from datetime import datetime, timezone
import pytest
from pydantic import ValidationError

from app.schemas import (
    UserCreate,
    UserLogin,
    UserResponse,
    CaseMasterCreate,
    CaseMasterResponse,
    AccusedResponse,
    RAGQueryRequest,
    ChatResponseData,
    EvidenceItem,
    NetworkGraphResponse,
    NetworkNodeSchema,
    NetworkEdgeSchema,
    ReportGenerationRequest,
    DocumentUploadResponse,
)


def test_user_schemas_validation():
    """Verify user registration and login validation."""
    login = UserLogin(email="officer.smith@ksp.gov.in", password="secretpassword")
    assert login.email == "officer.smith@ksp.gov.in"

    create_user = UserCreate(
        email="officer.smith@ksp.gov.in",
        password="secretpassword",
        full_name="Smith O.",
        rank="ACP",
        role="analyst",
    )
    assert create_user.rank == "ACP"

    with pytest.raises(ValidationError):
        UserLogin(email="invalid-email", password="123")


def test_rag_and_chat_schemas():
    """Verify RAG request and response structure."""
    rag_req = RAGQueryRequest(prompt="Find all bike theft FIRs in Mysuru", top_k=5)
    assert rag_req.top_k == 5

    ev = EvidenceItem(fir_id="FIR-2024-MYS-012", source="Accused.csv", relevance_score=0.92)
    resp = ChatResponseData(
        answer="Found 3 bike theft FIRs matching pattern.",
        evidence=[ev],
        fir_ids=["FIR-2024-MYS-012"],
        confidence="92%",
        key_findings=["Targeted late night transit corridors"],
    )
    assert resp.confidence == "92%"
    assert len(resp.evidence) == 1
    assert resp.evidence[0].fir_id == "FIR-2024-MYS-012"


def test_network_and_report_schemas():
    """Verify Network Analysis and Report generation schemas."""
    node = NetworkNodeSchema(id="accused-1", label="Ramesh Guja", type="suspect", pos=[1.0, 2.0, 3.0])
    edge = NetworkEdgeSchema(source="accused-1", target="dev-99", relation="Call-Log")

    graph = NetworkGraphResponse(
        nodes=[node],
        edges=[edge],
        total_suspects=1,
        total_connections=1,
    )
    assert graph.nodes[0].label == "Ramesh Guja"

    report_req = ReportGenerationRequest(
        title="Tactical Intelligence Report",
        fir_number="FIR-2024-MYS-012",
        output_format="markdown",
    )
    assert report_req.output_format == "markdown"
