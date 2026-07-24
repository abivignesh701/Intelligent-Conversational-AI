"""
Module 15 Verification Tests
Tests TTLCache, Sliding Window Rate Limiting, OWASP Security Headers, and Production Readiness.
"""

import time
import pytest
from fastapi.testclient import TestClient

from app.core.cache import TTLCache
from app.core.middleware import RateLimiter
from app.main import app

client = TestClient(app)


def test_ttl_cache():
    """Verify TTLCache setting, getting, and expiration."""
    cache = TTLCache(default_ttl=1, max_size=2)
    cache.set("k1", "v1")
    assert cache.get("k1") == "v1"

    # Test eviction on expiration
    time.sleep(1.1)
    assert cache.get("k1") is None


def test_rate_limiter():
    """Verify sliding-window rate limiter limits excess requests."""
    limiter = RateLimiter(max_requests=2, window_seconds=60)
    client_ip = "192.168.1.100"

    assert limiter.is_allowed(client_ip) is True
    assert limiter.is_allowed(client_ip) is True
    assert limiter.is_allowed(client_ip) is False


def test_security_headers_middleware():
    """Verify OWASP security headers are present in response."""
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.headers.get("X-Frame-Options") == "DENY"
    assert resp.headers.get("X-Content-Type-Options") == "nosniff"
    assert resp.headers.get("X-XSS-Protection") == "1; mode=block"
    assert "Strict-Transport-Security" in resp.headers
