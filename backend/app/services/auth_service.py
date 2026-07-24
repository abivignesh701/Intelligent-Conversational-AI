"""
Crime Intelligence Platform — Authentication Business Service

Business logic for user authentication, registration, password verification, and JWT issuance.
"""

from __future__ import annotations

from typing import Optional

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import AuthenticationError, DuplicateError, NotFoundError
from app.core.security import create_access_token, verify_password
from app.models.user import User
from app.repositories.user import user_repository
from app.schemas.auth import Token, UserCreate, UserLogin, UserResponse


class AuthService:
    """Business service handling user authentication and token operations."""

    def __init__(self) -> None:
        self.user_repo = user_repository

    async def authenticate_user(self, db: AsyncSession, login_data: UserLogin) -> Token:
        """
        Authenticate user email & password and return signed JWT access token.

        Args:
            db: Async database session
            login_data: UserLogin schema containing email and raw password

        Returns:
            Token: JWT access token envelope with user profile

        Raises:
            AuthenticationError: If email not found or password invalid
        """
        user = await self.user_repo.get_by_email(db, login_data.email)
        if not user:
            raise AuthenticationError(detail="Invalid email or password.")

        if not verify_password(login_data.password, user.hashed_password):
            raise AuthenticationError(detail="Invalid email or password.")

        if not user.is_active:
            raise AuthenticationError(detail="User account is deactivated. Contact administrator.")

        access_token = create_access_token(
            subject=user.email,
            role=user.role,
            extra_claims={"full_name": user.full_name, "rank": user.rank},
        )

        user_response = UserResponse.model_validate(user)

        return Token(
            access_token=access_token,
            token_type="bearer",
            expires_in=3600,
            user=user_response,
        )

    async def register_user(self, db: AsyncSession, user_in: UserCreate) -> UserResponse:
        """
        Register a new officer or analyst account.

        Args:
            db: Async database session
            user_in: UserCreate schema

        Returns:
            UserResponse: Created user profile

        Raises:
            DuplicateError: If email or badge number already exists
        """
        existing_email = await self.user_repo.get_by_email(db, user_in.email)
        if existing_email:
            raise DuplicateError(
                detail=f"User with email '{user_in.email}' already exists.",
                context={"email": user_in.email},
            )

        if user_in.badge_number:
            existing_badge = await self.user_repo.get_by_badge_number(db, user_in.badge_number)
            if existing_badge:
                raise DuplicateError(
                    detail=f"Officer with badge number '{user_in.badge_number}' already exists.",
                    context={"badge_number": user_in.badge_number},
                )

        user = await self.user_repo.create_user(db, user_in)
        return UserResponse.model_validate(user)

    async def get_user_profile(self, db: AsyncSession, email_or_id: str | int) -> UserResponse:
        """Fetch user profile by email or ID."""
        if isinstance(email_or_id, str) and "@" in email_or_id:
            user = await self.user_repo.get_by_email(db, email_or_id)
        else:
            user = await self.user_repo.get(db, email_or_id)

        if not user:
            raise NotFoundError(detail="User profile not found.")

        return UserResponse.model_validate(user)


auth_service = AuthService()
