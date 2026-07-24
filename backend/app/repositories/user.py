"""
Crime Intelligence Platform — User Repository

Data access layer for User accounts, authentication credentials, and officer profiles.
"""

from __future__ import annotations

from typing import Any, Dict, Optional, Union

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import hash_password
from app.models.user import User
from app.repositories.base import BaseRepository
from app.schemas.auth import UserCreate, UserUpdate


class UserRepository(BaseRepository[User, UserCreate, UserUpdate]):
    """Repository handling database operations for User accounts."""

    def __init__(self) -> None:
        super().__init__(User)

    async def get_by_email(self, db: AsyncSession, email: str) -> Optional[User]:
        """Fetch user by unique email address."""
        return await self.get_by_field(db, "email", email)

    async def get_by_badge_number(self, db: AsyncSession, badge_number: str) -> Optional[User]:
        """Fetch officer profile by unique badge number."""
        return await self.get_by_field(db, "badge_number", badge_number)

    async def create_user(
        self,
        db: AsyncSession,
        user_in: UserCreate,
    ) -> User:
        """
        Create a new user, automatically hashing the password field into hashed_password.
        """
        user_data = user_in.model_dump(exclude_unset=True)
        password = user_data.pop("password", None)
        if password:
            user_data["hashed_password"] = hash_password(password)

        db_obj = User(**user_data)
        db.add(db_obj)
        await db.flush()
        await db.refresh(db_obj)
        return db_obj

    async def create(
        self,
        db: AsyncSession,
        obj_in: Union[UserCreate, Dict[str, Any]],
    ) -> User:
        """Override base create method to ensure password is hashed."""
        if isinstance(obj_in, UserCreate):
            return await self.create_user(db, obj_in)

        data = dict(obj_in)
        if "password" in data:
            raw_password = data.pop("password")
            data["hashed_password"] = hash_password(raw_password)

        return await super().create(db, data)

    async def is_active(self, user: User) -> bool:
        """Check if user account is active."""
        return user.is_active


user_repository = UserRepository()
