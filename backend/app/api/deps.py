"""
Crime Intelligence Platform — Authentication & Authorization Dependencies

FastAPI dependencies for extracting, validating, and injecting authenticated user tokens
and enforcing Role-Based Access Control (RBAC) across protected API routes.

Architecture:
    - HTTPBearer scheme provides Swagger UI Bearer token authorization button
    - `get_current_token_payload` decodes incoming JWT Bearer token header
    - `get_current_user_claims` extracts validated user claims (user_id, role)
    - `require_role(allowed_roles)` returns a dependency checking user permissions
"""

from __future__ import annotations

from typing import Any, Callable, Dict, List, Optional

from fastapi import Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel, Field

from app.core.exceptions import AuthenticationError, AuthorizationError
from app.core.security import decode_access_token

# Bearer security scheme for Swagger docs
security_scheme = HTTPBearer(
    scheme_name="HTTPBearer",
    description="Enter JWT Bearer token in the format: Bearer <token>",
    auto_error=False,
)


class TokenPayload(BaseModel):
    """Payload claims contained in a valid JWT access token."""

    sub: str = Field(description="Subject (User ID or email)")
    role: str = Field(default="officer", description="User access role")
    exp: Optional[int] = Field(default=None, description="Expiration UNIX timestamp")
    iat: Optional[int] = Field(default=None, description="Issued-at UNIX timestamp")


async def get_current_token_payload(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security_scheme),
) -> TokenPayload:
    """
    FastAPI dependency that extracts and validates the JWT Bearer token.

    Args:
        credentials: Authorization header Bearer token provided by FastAPI

    Returns:
        TokenPayload: Parsed and validated token payload

    Raises:
        AuthenticationError: If Authorization header is missing or malformed
    """
    if not credentials or not credentials.credentials:
        raise AuthenticationError(
            detail="Authentication credentials were not provided. Include 'Authorization: Bearer <token>'."
        )

    payload_dict = decode_access_token(credentials.credentials)

    sub = payload_dict.get("sub")
    if not sub:
        raise AuthenticationError(detail="Token payload is missing subject claim ('sub').")

    return TokenPayload(
        sub=sub,
        role=payload_dict.get("role", "officer"),
        exp=payload_dict.get("exp"),
        iat=payload_dict.get("iat"),
    )


async def get_current_user_claims(
    payload: TokenPayload = Depends(get_current_token_payload),
) -> Dict[str, Any]:
    """
    Returns a dictionary of validated claims for the authenticated request.

    Args:
        payload: Validated TokenPayload from get_current_token_payload

    Returns:
        Dict[str, Any]: Subject ID and role
    """
    return {
        "user_id": payload.sub,
        "role": payload.role,
    }


def require_role(allowed_roles: List[str]) -> Callable:
    """
    Dependency factory enforcing Role-Based Access Control (RBAC).

    Usage:
        @router.get("/admin-only", dependencies=[Depends(require_role(["admin"]))])
        async def admin_route():
            ...

    Args:
        allowed_roles: List of permitted role names (e.g. ['admin', 'analyst'])

    Returns:
        Callable dependency that validates user role
    """

    async def role_checker(
        payload: TokenPayload = Depends(get_current_token_payload),
    ) -> TokenPayload:
        if payload.role not in allowed_roles:
            raise AuthorizationError(
                detail=f"Role '{payload.role}' is not authorized to access this resource. Permitted roles: {allowed_roles}.",
                context={"required_roles": allowed_roles, "user_role": payload.role},
            )
        return payload

    return role_checker
