"""
Crime Intelligence Platform — Authentication & User Schemas

Pydantic models for authentication, token exchanges, user registration, and profiles.
"""

from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserLogin(BaseModel):
    """User login request payload."""

    email: EmailStr = Field(description="User email address")
    password: str = Field(min_length=6, description="User password")


class UserCreate(BaseModel):
    """User creation request payload."""

    email: EmailStr = Field(description="User email address")
    password: str = Field(min_length=6, description="Raw password string")
    full_name: str = Field(description="Full officer or analyst name")
    badge_number: Optional[str] = Field(default=None, description="Official badge number")
    rank: str = Field(default="Inspector", description="Police rank")
    role: str = Field(default="officer", description="Role: admin, analyst, or officer")
    police_station_id: Optional[int] = Field(default=None, description="Station ID")


class UserUpdate(BaseModel):
    """User profile update payload."""

    full_name: Optional[str] = None
    badge_number: Optional[str] = None
    rank: Optional[str] = None
    role: Optional[str] = None
    police_station_id: Optional[int] = None
    is_active: Optional[bool] = None


class UserResponse(BaseModel):
    """User public profile response model."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    email: EmailStr
    full_name: str
    badge_number: Optional[str] = None
    rank: str
    role: str
    police_station_id: Optional[int] = None
    is_active: bool
    is_superuser: bool
    created_at: datetime
    updated_at: datetime


class Token(BaseModel):
    """JWT Token response model."""

    access_token: str
    token_type: str = "bearer"
    expires_in: int = Field(description="Expiration time in seconds")
    user: UserResponse
