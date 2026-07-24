"""
Module 3 Verification Tests
Tests password hashing, JWT token operations, authentication dependencies, and RBAC security.
"""

from datetime import timedelta
import pytest
from fastapi import FastAPI, Depends
from fastapi.testclient import TestClient

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    decode_access_token,
)
from app.core.exceptions import (
    TokenExpiredError,
    InvalidTokenError,
    BaseAppException,
)
from app.core.responses import error_response
from app.api.deps import (
    get_current_token_payload,
    get_current_user_claims,
    require_role,
    TokenPayload,
)

# ── Setup Dummy Auth App for Endpoint Testing ─────────────────────

dummy_auth_app = FastAPI()


@dummy_auth_app.exception_handler(BaseAppException)
async def app_exception_handler(request, exc: BaseAppException):
    from fastapi.responses import JSONResponse
    return JSONResponse(
        status_code=exc.status_code,
        content=error_response(
            code=exc.error_code,
            message=exc.detail,
            context=exc.context,
        ),
    )


@dummy_auth_app.get("/protected")
async def protected_route(payload: TokenPayload = Depends(get_current_token_payload)):
    return {"message": "Access granted", "sub": payload.sub, "role": payload.role}


@dummy_auth_app.get("/admin-only", dependencies=[Depends(require_role(["admin"]))])
async def admin_route():
    return {"message": "Admin area"}


client = TestClient(dummy_auth_app)


# ── Password Hashing Tests ─────────────────────────────────────────


def test_password_hashing():
    """Verify password hashing and verification."""
    password = "SuperSecretPassword123!"
    hashed = hash_password(password)

    assert hashed != password
    assert verify_password(password, hashed) is True
    assert verify_password("WrongPassword", hashed) is False


# ── JWT Token Tests ────────────────────────────────────────────────


def test_create_and_decode_jwt():
    """Verify JWT creation and decoding with claims."""
    token = create_access_token(subject="officer_kumar@ksp.gov.in", role="analyst")
    assert isinstance(token, str)

    payload = decode_access_token(token)
    assert payload["sub"] == "officer_kumar@ksp.gov.in"
    assert payload["role"] == "analyst"
    assert "exp" in payload
    assert "iat" in payload


def test_expired_token():
    """Verify TokenExpiredError raised for expired tokens."""
    token = create_access_token(
        subject="test_user",
        expires_delta=timedelta(seconds=-10),
    )
    with pytest.raises(TokenExpiredError):
        decode_access_token(token)


def test_invalid_token():
    """Verify InvalidTokenError raised for malformed tokens."""
    with pytest.raises(InvalidTokenError):
        decode_access_token("invalid.jwt.token.string")


# ── API Endpoint Authentication & Authorization Tests ──────────────


def test_protected_route_without_token():
    """Verify 401 when no token is provided."""
    response = client.get("/protected")
    assert response.status_code == 401
    data = response.json()
    assert data["success"] is False
    assert data["error"]["code"] == "AUTHENTICATION_ERROR"


def test_protected_route_with_valid_token():
    """Verify access granted with valid Bearer token."""
    token = create_access_token(subject="user_101", role="officer")
    response = client.get(
        "/protected",
        headers={"Authorization": f"Bearer {token}"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["sub"] == "user_101"
    assert data["role"] == "officer"


def test_rbac_authorization():
    """Verify Role-Based Access Control dependency."""
    officer_token = create_access_token(subject="user_officer", role="officer")
    admin_token = create_access_token(subject="user_admin", role="admin")

    # Officer should be rejected from admin route with 403
    res_officer = client.get(
        "/admin-only",
        headers={"Authorization": f"Bearer {officer_token}"},
    )
    assert res_officer.status_code == 403
    assert res_officer.json()["error"]["code"] == "AUTHORIZATION_ERROR"

    # Admin should be allowed
    res_admin = client.get(
        "/admin-only",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert res_admin.status_code == 200
    assert res_admin.json()["message"] == "Admin area"
