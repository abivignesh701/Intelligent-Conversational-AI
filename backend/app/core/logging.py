"""
Crime Intelligence Platform — Structured Logging

Provides production-grade structured logging using structlog.
Supports both JSON (production) and console (development) output formats.

Architecture:
    - structlog for structured, context-rich log messages
    - JSON format in production for log aggregation tools
    - Console format in development for human readability
    - Request-scoped context binding (correlation IDs, user info)
    - All modules use get_logger() to obtain a configured logger

Usage:
    from app.core.logging import get_logger
    logger = get_logger(__name__)
    logger.info("processing_request", user_id="123", action="search")
"""

from __future__ import annotations

import logging
import sys
from typing import Any

import structlog

from app.core.config import get_settings


def setup_logging() -> None:
    """
    Configure structured logging for the entire application.

    Called once during application startup in main.py lifespan.
    Configures both structlog and standard library logging.
    """
    settings = get_settings()
    log_level = getattr(logging, settings.LOG_LEVEL.upper(), logging.INFO)

    # Standard library logging configuration
    logging.basicConfig(
        format="%(message)s",
        stream=sys.stdout,
        level=log_level,
    )

    # Shared processors for all log entries
    shared_processors: list[Any] = [
        structlog.contextvars.merge_contextvars,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.add_log_level,
        structlog.stdlib.PositionalArgumentsFormatter(),
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.StackInfoRenderer(),
        structlog.processors.UnicodeDecoder(),
    ]

    if settings.LOG_FORMAT.lower() == "json":
        # Production: JSON output for log aggregation
        renderer = structlog.processors.JSONRenderer()
    else:
        # Development: human-readable console output
        renderer = structlog.dev.ConsoleRenderer(
            colors=True,
            exception_formatter=structlog.dev.plain_traceback,
        )

    structlog.configure(
        processors=[
            *shared_processors,
            structlog.stdlib.ProcessorFormatter.wrap_for_formatter,
        ],
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )

    # Configure the standard library formatter to use structlog
    formatter = structlog.stdlib.ProcessorFormatter(
        processors=[
            structlog.stdlib.ProcessorFormatter.remove_processors_meta,
            renderer,
        ],
    )

    # Apply formatter to root handler
    root_logger = logging.getLogger()
    for handler in root_logger.handlers:
        handler.setFormatter(formatter)

    # Suppress noisy third-party loggers
    for noisy_logger in ["uvicorn.access", "uvicorn.error", "sqlalchemy.engine"]:
        logging.getLogger(noisy_logger).setLevel(logging.WARNING)


def get_logger(name: str) -> structlog.stdlib.BoundLogger:
    """
    Get a structured logger instance for the given module name.

    Args:
        name: The module name, typically __name__

    Returns:
        A configured structlog BoundLogger instance

    Usage:
        logger = get_logger(__name__)
        logger.info("event_name", key="value")
    """
    return structlog.get_logger(name)
