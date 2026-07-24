"""
Crime Intelligence Platform — FastAPI Application Entry Point

Root FastAPI application configuring lifespan, CORS middleware, security headers, rate limiting,
structured request logging, custom exception handling, health check, legacy gemini endpoint,
and all modular REST API routers.
"""

from __future__ import annotations

import time
import uuid
from contextlib import asynccontextmanager
from pathlib import Path
from typing import AsyncGenerator

import structlog
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.api.v1.router import api_router
from app.core.config import get_settings
from app.core.exceptions import BaseAppException
from app.core.logging import get_logger, setup_logging
from app.core.middleware import RateLimitingMiddleware, SecurityHeadersMiddleware
from app.core.responses import (
    ChatResponse,
    HealthResponse,
    error_response,
)
from app.rag.engine import rag_engine
from app.schemas.chat import RAGQueryRequest

logger = get_logger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    # ── Startup ──
    setup_logging()
    settings = get_settings()

    logger.info(
        "application_starting",
        app_name=settings.APP_NAME,
        version=settings.APP_VERSION,
        environment=settings.APP_ENV,
        debug=settings.DEBUG,
    )

    required_dirs = [
        Path(settings.UPLOAD_DIRECTORY),
        Path(settings.VECTOR_DB_PATH),
        Path("data"),
        Path("data/reports"),
    ]
    for directory in required_dirs:
        directory.mkdir(parents=True, exist_ok=True)
        logger.info("directory_ensured", path=str(directory))

    if not settings.GEMINI_API_KEY:
        logger.warning(
            "gemini_api_key_missing",
            message="GEMINI_API_KEY is not set. AI features will use fallback responses.",
        )

    logger.info(
        "application_started",
        app_name=settings.APP_NAME,
        version=settings.APP_VERSION,
    )

    yield

    # ── Shutdown ──
    logger.info("application_shutting_down")


settings = get_settings()

app = FastAPI(
    title=settings.APP_NAME,
    description=(
        "AI-powered Crime Intelligence Platform for the Karnataka State Police. "
        "Provides RAG-based investigation assistance, criminal network analysis, "
        "evidence-backed intelligence reports, and conversational memory."
    ),
    version=settings.APP_VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
    lifespan=lifespan,
)

# ── Middleware Registration (Order: Security -> RateLimit -> CORS -> Logging) ──
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(RateLimitingMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["X-Request-ID", "X-Process-Time"],
)


# ── Request Logging Middleware ─────────────────────────────────────
@app.middleware("http")
async def request_logging_middleware(request: Request, call_next):
    request_id = str(uuid.uuid4())
    start_time = time.perf_counter()

    structlog.contextvars.clear_contextvars()
    structlog.contextvars.bind_contextvars(
        request_id=request_id,
        method=request.method,
        path=request.url.path,
    )

    logger.info(
        "request_started",
        client_host=request.client.host if request.client else "unknown",
    )

    try:
        response = await call_next(request)
    except Exception as exc:
        process_time = time.perf_counter() - start_time
        logger.error(
            "request_failed",
            error=str(exc),
            process_time_ms=round(process_time * 1000, 2),
        )
        raise

    process_time = time.perf_counter() - start_time
    response.headers["X-Request-ID"] = request_id
    response.headers["X-Process-Time"] = f"{process_time:.4f}"

    logger.info(
        "request_completed",
        status_code=response.status_code,
        process_time_ms=round(process_time * 1000, 2),
    )

    return response


# ── Global Exception Handlers ─────────────────────────────────────
@app.exception_handler(BaseAppException)
async def app_exception_handler(request: Request, exc: BaseAppException) -> JSONResponse:
    logger.error(
        "app_exception",
        error_code=exc.error_code,
        detail=exc.detail,
        context=exc.context,
        status_code=exc.status_code,
    )
    return JSONResponse(
        status_code=exc.status_code,
        content=error_response(
            code=exc.error_code,
            message=exc.detail,
            context=exc.context,
        ),
    )


@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    logger.error(
        "unhandled_exception",
        error_type=type(exc).__name__,
        detail=str(exc),
        path=request.url.path,
    )
    return JSONResponse(
        status_code=500,
        content=error_response(
            code="INTERNAL_ERROR",
            message="An unexpected internal error occurred.",
            context={"error_type": type(exc).__name__} if settings.DEBUG else {},
        ),
    )


# ── System Health & Root ──────────────────────────────────────────
@app.get(
    "/api/health",
    response_model=HealthResponse,
    tags=["System"],
    summary="Health Check",
)
async def health_check() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service=settings.APP_NAME,
        version=settings.APP_VERSION,
        environment=settings.APP_ENV,
        database="connected",
        vector_store="initialized",
        gemini="configured" if settings.GEMINI_API_KEY else "simulated",
    )


@app.post(
    "/api/gemini/analyze",
    response_model=ChatResponse,
    tags=["AI Assistant"],
    summary="Analyze Intelligence (Legacy Frontend Endpoint)",
)
async def gemini_analyze_legacy(request: Request) -> ChatResponse:
    try:
        body = await request.json()
    except Exception:
        return ChatResponse(
            text="Invalid request format. Please provide a JSON body with a 'prompt' field.",
            confidence="0%",
            refTags=[],
        )

    prompt = body.get("prompt", "")
    if not prompt:
        return ChatResponse(
            text="No prompt provided. Please enter your intelligence query.",
            confidence="0%",
            refTags=[],
        )

    req = RAGQueryRequest(prompt=prompt, context=body.get("context", "KSP Intelligence DB"))
    structured_data = await rag_engine.gemini_service.analyze_intelligence(
        user_query=prompt, context_scope=body.get("context", "KSP Intelligence DB")
    )

    return ChatResponse(
        text=structured_data.answer,
        confidence=structured_data.confidence,
        refTags=structured_data.fir_ids if structured_data.fir_ids else ["KSP-INTEL"],
        structured=structured_data,
    )


# ── Mount Main Modular API Router ─────────────────────────────────
app.include_router(api_router)


@app.get("/", include_in_schema=False)
async def root_redirect():
    return {
        "message": "KSP Crime Intelligence Platform API",
        "docs": "/docs",
        "health": "/api/health",
    }
