"""
Crime Intelligence Platform — Security & Authentication Utilities

Provides password hashing, JWT access token generation, and token verification.
All cryptographic operations use production-grade standard algorithms.

Architecture:
    - Native bcrypt for password hashing & verification (Python 3.14 safe)
    - PyJWT for encoding & decoding JSON Web Tokens (HS256)
    - Token generation embeds subject (user_id/email), role, and UTC expiration
    - Configured via app.core.config Settings (JWT_SECRET, JWT_ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES)
"""

from __future__ import annotations

from datetime import datetime, timedelta, timezone
from typing import Any, Dict, Optional

import bcrypt
import jwt

from app.core.config import get_settings
from app.core.exceptions import AuthenticationError, InvalidTokenError, TokenExpiredError
from app.core.logging import get_logger

logger = get_logger(__name__)
settings = get_settings()


# ── Password Hashing & Verification ─────────────────────────────────────────


def hash_password(password: str) -> str:
    """
    Hash a plain text password using bcrypt.

    Args:
        password: Plain text password string

    Returns:
        str: Salted and hashed password string
    """
    # Truncate password to 72 bytes (bcrypt maximum limit)
    pwd_bytes = password.encode("utf-8")[:72]
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(pwd_bytes, salt)
    return hashed.decode("utf-8")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verify a plain text password against a stored hash.

    Args:
        plain_password: Plain text password to check
        hashed_password: Stored bcrypt hash

    Returns:
        bool: True if password matches hash, else False
    """
    try:
        pwd_bytes = plain_password.encode("utf-8")[:72]
        hash_bytes = hashed_password.encode("utf-8")
        return bcrypt.checkpw(pwd_bytes, hash_bytes)
    except Exception as exc:
        logger.warning("password_verification_failed", error=str(exc))
        return False


# ── JWT Token Operations ───────────────────────────────────────────────────


def create_access_token(
    subject: str | int,
    role: str = "officer",
    extra_claims: Optional[Dict[str, Any]] = None,
    expires_delta: Optional[timedelta] = None,
) -> str:
    """
    Generate a signed JWT access token.

    Args:
        subject: User ID or email identifying the subject
        role: User role (e.g. 'admin', 'analyst', 'officer')
        extra_claims: Optional additional dictionary claims to embed
        expires_delta: Optional custom expiration timedelta

    Returns:
        str: Encoded JWT token string
    """
    now = datetime.now(timezone.utc)
    if expires_delta:
        expire = now + expires_delta
    else:
        expire = now + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode: Dict[str, Any] = {
        "sub": str(subject),
        "role": role,
        "iat": int(now.timestamp()),
        "exp": int(expire.timestamp()),
        "type": "access",
    }

    if extra_claims:
        to_encode.update(extra_claims)

    encoded_jwt = jwt.encode(
        to_encode,
        settings.JWT_SECRET,
        algorithm=settings.JWT_ALGORITHM,
    )
    return encoded_jwt


def decode_access_token(token: str) -> Dict[str, Any]:
    """
    Decode and validate a JWT access token.

    Args:
        token: Encoded JWT token string

    Returns:
        Dict[str, Any]: Decoded token payload dictionary

    Raises:
        TokenExpiredError: If the token has passed its expiration time
        InvalidTokenError: If the signature is invalid or token is malformed
    """
    try:
        payload = jwt.decode(
            token,
            settings.JWT_SECRET,
            algorithms=[settings.JWT_ALGORITHM],
        )
        return payload
    except jwt.ExpiredSignatureError as exc:
        logger.warning("jwt_token_expired", error=str(exc))
        raise TokenExpiredError() from exc
    except jwt.InvalidTokenError as exc:
        logger.warning("jwt_token_invalid", error=str(exc))
        raise InvalidTokenError() from exc
