"""
Crime Intelligence Platform — Security & Rate Limiting Middleware

Implements OWASP security headers hardening and IP-based sliding window rate limiting.
"""

from __future__ import annotations

import time
from typing import Dict, List
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

from app.core.logging import get_logger

logger = get_logger(__name__)


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Adds mandatory OWASP security headers to all outgoing HTTP responses."""

    async def dispatch(self, request: Request, call_next) -> Response:
        response: Response = await call_next(request)
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response


class RateLimiter:
    """Sliding-window IP rate limiter."""

    def __init__(self, max_requests: int = 120, window_seconds: int = 60) -> None:
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._history: Dict[str, List[float]] = {}

    def is_allowed(self, client_ip: str) -> bool:
        now = time.time()
        cutoff = now - self.window_seconds

        if client_ip not in self._history:
            self._history[client_ip] = [now]
            return True

        # Keep timestamps within window
        self._history[client_ip] = [t for t in self._history[client_ip] if t > cutoff]

        if len(self._history[client_ip]) >= self.max_requests:
            return False

        self._history[client_ip].append(now)
        return True


rate_limiter = RateLimiter(max_requests=150, window_seconds=60)


class RateLimitingMiddleware(BaseHTTPMiddleware):
    """Enforces request rate limits per client IP."""

    async def dispatch(self, request: Request, call_next) -> Response:
        # Skip health check & static endpoints
        if request.url.path in ["/api/health", "/", "/docs", "/openapi.json"]:
            return await call_next(request)

        client_ip = request.client.host if request.client else "unknown"

        if not rate_limiter.is_allowed(client_ip):
            logger.warning("rate_limit_exceeded", client_ip=client_ip, path=request.url.path)
            return JSONResponse(
                status_code=429,
                content={
                    "success": False,
                    "error": {
                        "code": "RATE_LIMIT_EXCEEDED",
                        "message": "Too many requests. Please wait before retrying.",
                    },
                },
            )

        return await call_next(request)
