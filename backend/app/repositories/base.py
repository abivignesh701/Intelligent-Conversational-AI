"""
Crime Intelligence Platform — Generic Repository Base Pattern

Abstracts all data access operations behind a type-safe generic repository interface.
Prevents direct ORM query logic duplication across services and API handlers.

Architecture:
    - BaseRepository[ModelType, CreateSchemaType, UpdateSchemaType]
    - Accepts SQLAlchemy AsyncSession for async execution
    - Provides type-checked CRUD, multi-get, filtering, counting, pagination,
      text search, and bulk insert operations
    - Works with any model inheriting from Base and Pydantic schemas

Usage:
    class CaseRepository(BaseRepository[CaseMaster, CaseCreate, CaseUpdate]):
        pass

    repo = CaseRepository(CaseMaster)
    case = await repo.get(db, id=1)
"""

from __future__ import annotations

from typing import Any, Dict, Generic, List, Optional, Type, TypeVar, Union

from pydantic import BaseModel
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import DatabaseError, NotFoundError
from app.core.logging import get_logger
from app.db.base_class import Base

logger = get_logger(__name__)

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)


class BaseRepository(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    """
    Generic Repository Base Class for SQLAlchemy 2.0 ORM Models.

    Provides standard CRUD operations using async SQLAlchemy sessions.
    """

    def __init__(self, model: Type[ModelType]) -> None:
        """
        Initialize Repository with target SQLAlchemy Model class.

        Args:
            model: The SQLAlchemy model class (e.g. CaseMaster)
        """
        self.model = model

    # ── Read Operations ───────────────────────────────────────────────

    async def get(
        self,
        db: AsyncSession,
        id: Any,
    ) -> Optional[ModelType]:
        """
        Get a single record by primary key ID.

        Args:
            db: Active async database session
            id: Primary key value

        Returns:
            Optional[ModelType]: Model instance if found, else None
        """
        try:
            query = select(self.model).where(getattr(self.model, "id") == id)
            result = await db.execute(query)
            return result.scalar_one_or_none()
        except Exception as exc:
            logger.error(
                "repository_get_failed",
                model=self.model.__name__,
                id=id,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Failed to fetch {self.model.__name__} record with ID {id}."
            ) from exc

    async def get_or_404(
        self,
        db: AsyncSession,
        id: Any,
    ) -> ModelType:
        """
        Get record by primary key ID or raise NotFoundError.

        Args:
            db: Active async database session
            id: Primary key value

        Returns:
            ModelType: Model instance

        Raises:
            NotFoundError: If record does not exist
        """
        item = await self.get(db, id=id)
        if not item:
            raise NotFoundError(
                detail=f"{self.model.__name__} with ID '{id}' was not found.",
                context={"model": self.model.__name__, "id": id},
            )
        return item

    async def get_by_field(
        self,
        db: AsyncSession,
        field_name: str,
        value: Any,
    ) -> Optional[ModelType]:
        """
        Get single record matching exact field value.

        Args:
            db: Active async database session
            field_name: Model column name
            value: Filter value

        Returns:
            Optional[ModelType]: Matching model instance or None
        """
        try:
            column = getattr(self.model, field_name)
            query = select(self.model).where(column == value)
            result = await db.execute(query)
            return result.scalar_one_or_none()
        except AttributeError as exc:
            raise DatabaseError(
                detail=f"Model {self.model.__name__} has no field '{field_name}'."
            ) from exc
        except Exception as exc:
            logger.error(
                "repository_get_by_field_failed",
                model=self.model.__name__,
                field=field_name,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Failed to fetch {self.model.__name__} by {field_name}."
            ) from exc

    async def get_multi(
        self,
        db: AsyncSession,
        skip: int = 0,
        limit: int = 100,
        filters: Optional[Dict[str, Any]] = None,
        order_by: Optional[str] = None,
        descending: bool = False,
    ) -> List[ModelType]:
        """
        Get paginated list of records with optional filtering and sorting.

        Args:
            db: Active async database session
            skip: Offset number of records to skip
            limit: Maximum number of records to return
            filters: Key-value dictionary of exact equality filters
            order_by: Column name to sort by
            descending: Whether to sort in descending order

        Returns:
            List[ModelType]: List of model instances
        """
        try:
            query = select(self.model)

            if filters:
                for key, val in filters.items():
                    if val is not None and hasattr(self.model, key):
                        query = query.where(getattr(self.model, key) == val)

            if order_by and hasattr(self.model, order_by):
                order_col = getattr(self.model, order_by)
                if descending:
                    query = query.order_by(order_col.desc())
                else:
                    query = query.order_by(order_col.asc())

            query = query.offset(skip).limit(limit)
            result = await db.execute(query)
            return list(result.scalars().all())
        except Exception as exc:
            logger.error(
                "repository_get_multi_failed",
                model=self.model.__name__,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Failed to fetch list of {self.model.__name__} records."
            ) from exc

    async def search_text(
        self,
        db: AsyncSession,
        field_name: str,
        query_text: str,
        limit: int = 20,
    ) -> List[ModelType]:
        """
        Search text field using ILIKE pattern matching.

        Args:
            db: Active async database session
            field_name: Text column name
            query_text: Search query substring
            limit: Maximum records to return

        Returns:
            List[ModelType]: Matching records
        """
        try:
            column = getattr(self.model, field_name)
            stmt = (
                select(self.model)
                .where(column.ilike(f"%{query_text}%"))
                .limit(limit)
            )
            result = await db.execute(stmt)
            return list(result.scalars().all())
        except Exception as exc:
            logger.error(
                "repository_search_text_failed",
                model=self.model.__name__,
                field=field_name,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Search failed on {self.model.__name__}.{field_name}."
            ) from exc

    async def count(
        self,
        db: AsyncSession,
        filters: Optional[Dict[str, Any]] = None,
    ) -> int:
        """
        Count total records matching optional filters.

        Args:
            db: Active async database session
            filters: Key-value dictionary of equality filters

        Returns:
            int: Total count of matching records
        """
        try:
            query = select(func.count()).select_from(self.model)
            if filters:
                for key, val in filters.items():
                    if val is not None and hasattr(self.model, key):
                        query = query.where(getattr(self.model, key) == val)
            result = await db.execute(query)
            return result.scalar() or 0
        except Exception as exc:
            logger.error(
                "repository_count_failed",
                model=self.model.__name__,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Failed to count {self.model.__name__} records."
            ) from exc

    async def exists(
        self,
        db: AsyncSession,
        id: Any,
    ) -> bool:
        """
        Check if a record exists by primary key ID.

        Args:
            db: Active async database session
            id: Primary key value

        Returns:
            bool: True if record exists, else False
        """
        cnt = await self.count(db, filters={"id": id})
        return cnt > 0

    # ── Write Operations ──────────────────────────────────────────────

    async def create(
        self,
        db: AsyncSession,
        obj_in: Union[CreateSchemaType, Dict[str, Any]],
    ) -> ModelType:
        """
        Create a new database record.

        Args:
            db: Active async database session
            obj_in: Pydantic schema or dict containing field attributes

        Returns:
            ModelType: Created model instance
        """
        try:
            if isinstance(obj_in, dict):
                create_data = obj_in
            else:
                create_data = obj_in.model_dump(exclude_unset=True)

            db_obj = self.model(**create_data)
            db.add(db_obj)
            await db.flush()
            await db.refresh(db_obj)
            return db_obj
        except Exception as exc:
            logger.error(
                "repository_create_failed",
                model=self.model.__name__,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Failed to create {self.model.__name__} record."
            ) from exc

    async def create_many(
        self,
        db: AsyncSession,
        obj_in_list: List[Union[CreateSchemaType, Dict[str, Any]]],
    ) -> List[ModelType]:
        """
        Bulk insert multiple records.

        Args:
            db: Active async database session
            obj_in_list: List of Pydantic schemas or dicts

        Returns:
            List[ModelType]: Created model instances
        """
        try:
            db_objs: List[ModelType] = []
            for item in obj_in_list:
                data = item if isinstance(item, dict) else item.model_dump(exclude_unset=True)
                db_obj = self.model(**data)
                db_objs.append(db_obj)

            db.add_all(db_objs)
            await db.flush()
            return db_objs
        except Exception as exc:
            logger.error(
                "repository_create_many_failed",
                model=self.model.__name__,
                count=len(obj_in_list),
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Bulk creation failed for {self.model.__name__}."
            ) from exc

    async def update(
        self,
        db: AsyncSession,
        db_obj: ModelType,
        obj_in: Union[UpdateSchemaType, Dict[str, Any]],
    ) -> ModelType:
        """
        Update an existing record.

        Args:
            db: Active async database session
            db_obj: Existing SQLAlchemy model instance
            obj_in: Pydantic schema or dict containing fields to update

        Returns:
            ModelType: Updated model instance
        """
        try:
            if isinstance(obj_in, dict):
                update_data = obj_in
            else:
                update_data = obj_in.model_dump(exclude_unset=True)

            for field, val in update_data.items():
                if hasattr(db_obj, field):
                    setattr(db_obj, field, val)

            db.add(db_obj)
            await db.flush()
            await db.refresh(db_obj)
            return db_obj
        except Exception as exc:
            logger.error(
                "repository_update_failed",
                model=self.model.__name__,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Failed to update {self.model.__name__} record."
            ) from exc

    async def delete(
        self,
        db: AsyncSession,
        id: Any,
    ) -> bool:
        """
        Delete a record by primary key ID.

        Args:
            db: Active async database session
            id: Primary key value

        Returns:
            bool: True if record was found and deleted, else False
        """
        try:
            db_obj = await self.get(db, id=id)
            if not db_obj:
                return False
            await db.delete(db_obj)
            await db.flush()
            return True
        except Exception as exc:
            logger.error(
                "repository_delete_failed",
                model=self.model.__name__,
                id=id,
                error=str(exc),
            )
            raise DatabaseError(
                detail=f"Failed to delete {self.model.__name__} record with ID {id}."
            ) from exc
