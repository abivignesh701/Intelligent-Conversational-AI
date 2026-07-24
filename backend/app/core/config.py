"""
Crime Intelligence Platform — Application Configuration

Centralizes all environment variable loading via Pydantic Settings.
Every configurable parameter is loaded from environment variables or .env file.
No secrets are ever hardcoded.

Architecture:
    - Uses pydantic-settings for type-safe, validated configuration
    - Singleton pattern via lru_cache ensures config is loaded once
    - CORS origins are parsed from JSON string in env
    - All modules import config via get_settings()

Usage:
    from app.core.config import get_settings
    settings = get_settings()
    print(settings.GEMINI_API_KEY)
"""

from __future__ import annotations

import json
from functools import lru_cache
from pathlib import Path
from typing import List

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Application settings loaded from environment variables and .env file.

    All fields map directly to environment variable names.
    Pydantic-settings handles type coercion, validation, and defaults.
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    # ── Gemini AI ──────────────────────────────────────────────
    GEMINI_API_KEY: str = ""
    CHAT_MODEL: str = "gemini-2.5-flash"
    EMBEDDING_MODEL: str = "text-embedding-004"

    # ── Database ───────────────────────────────────────────────
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/crime_intel_db"

    # ── JWT Authentication ─────────────────────────────────────
    JWT_SECRET: str = "change-this-to-a-long-random-secret-key-in-production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # ── Vector Database ────────────────────────────────────────
    VECTOR_DB_PATH: str = "data/vector_store"

    # ── File Uploads ───────────────────────────────────────────
    UPLOAD_DIRECTORY: str = "uploads"

    # ── Application ────────────────────────────────────────────
    APP_NAME: str = "KSP Crime Intelligence Platform"
    APP_VERSION: str = "1.0.0"
    APP_ENV: str = "development"
    DEBUG: bool = True
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:8000",
    ]

    # ── Logging ────────────────────────────────────────────────
    LOG_LEVEL: str = "INFO"
    LOG_FORMAT: str = "json"

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def parse_cors_origins(cls, value: str | list) -> list:
        """Parse CORS origins from JSON string or passthrough list."""
        if isinstance(value, str):
            try:
                parsed = json.loads(value)
                if isinstance(parsed, list):
                    return parsed
            except (json.JSONDecodeError, TypeError):
                return [origin.strip() for origin in value.split(",") if origin.strip()]
        return value

    @property
    def is_production(self) -> bool:
        """Check if running in production environment."""
        return self.APP_ENV.lower() == "production"

    @property
    def is_development(self) -> bool:
        """Check if running in development environment."""
        return self.APP_ENV.lower() == "development"

    @property
    def vector_store_path(self) -> Path:
        """Return the vector store path as a Path object."""
        return Path(self.VECTOR_DB_PATH)

    @property
    def upload_path(self) -> Path:
        """Return the upload directory as a Path object."""
        return Path(self.UPLOAD_DIRECTORY)

    @property
    def database_url_sync(self) -> str:
        """Return synchronous database URL for Alembic migrations."""
        return self.DATABASE_URL.replace(
            "postgresql+asyncpg://", "postgresql+psycopg2://"
        )


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    """
    Returns cached application settings instance.

    Uses lru_cache to ensure settings are loaded once per process.
    All subsequent calls return the same instance.
    """
    return Settings()
