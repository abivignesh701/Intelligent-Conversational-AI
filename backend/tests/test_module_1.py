"""
Module 1 Verification Tests
Tests configuration, logging, exceptions, responses, and base FastAPI endpoints.
"""

from fastapi.testclient import TestClient
from app.main import app
from app.core.config import get_settings
from app.core.exceptions import (
    BaseAppException,
    ValidationError,
    AuthenticationError,
    NotFoundError,
    GeminiError,
    VectorSearchError,
)
from app.core.responses import (
    success_response,
    error_response,
    paginated_response,
    ChatResponse,
)

client = TestClient(app)


def test_settings_load():
    """Verify settings loaded successfully with defaults."""
    settings = get_settings()
    assert settings.APP_NAME == "KSP Crime Intelligence Platform"
    assert settings.APP_VERSION == "1.0.0"
    assert isinstance(settings.CORS_ORIGINS, list)
    assert len(settings.CORS_ORIGINS) > 0


def test_exception_hierarchy():
    """Verify exception inheritance and properties."""
    err = NotFoundError(detail="Case FIR-123 not found", context={"id": "FIR-123"})
    assert isinstance(err, BaseAppException)
    assert err.status_code == 404
    assert err.error_code == "NOT_FOUND"
    assert err.detail == "Case FIR-123 not found"
    assert err.context == {"id": "FIR-123"}


def test_response_helpers():
    """Verify response helper functions format output correctly."""
    resp = success_response(data={"item": 1}, message="OK")
    assert resp["success"] is True
    assert resp["data"] == {"item": 1}

    err_resp = error_response(code="TEST_ERR", message="Failed")
    assert err_resp["success"] is False
    assert err_resp["error"]["code"] == "TEST_ERR"

    page_resp = paginated_response(data=[1, 2, 3], page=1, page_size=2, total_items=3)
    assert page_resp["pagination"]["total_pages"] == 2
    assert page_resp["pagination"]["has_next"] is True


def test_health_check_endpoint():
    """Verify GET /api/health returns 200 OK and expected structure."""
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["service"] == "KSP Crime Intelligence Platform"


def test_legacy_gemini_analyze_endpoint():
    """Verify POST /api/gemini/analyze works with prompt payload."""
    payload = {"prompt": "Analyze recent robbery patterns in Koramangala", "context": "KSP Intelligence DB"}
    response = client.post("/api/gemini/analyze", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "text" in data
    assert "confidence" in data
    assert "refTags" in data
