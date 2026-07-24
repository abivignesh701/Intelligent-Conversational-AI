"""
Crime Intelligence Platform — Authentication API Endpoints
"""

from __future__ import annotations

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_current_user_claims
from app.db.session import get_db
from app.schemas.auth import Token, UserCreate, UserLogin, UserResponse
from app.services.auth_service import auth_service

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post(
    "/login",
    response_model=Token,
    summary="User Login",
    description="Authenticate officer/analyst credentials and issue signed JWT access token.",
)
async def login(
    login_data: UserLogin,
    db: AsyncSession = Depends(get_db),
) -> Token:
    return await auth_service.authenticate_user(db, login_data)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="User Registration",
    description="Register a new officer or analyst account.",
)
async def register(
    user_in: UserCreate,
    db: AsyncSession = Depends(get_db),
) -> UserResponse:
    return await auth_service.register_user(db, user_in)


@router.get(
    "/me",
    response_model=UserResponse,
    summary="Current User Profile",
    description="Fetch current authenticated user profile.",
)
async def get_current_user(
    claims: dict = Depends(get_current_user_claims),
    db: AsyncSession = Depends(get_db),
) -> UserResponse:
    return await auth_service.get_user_profile(db, claims["user_id"])
