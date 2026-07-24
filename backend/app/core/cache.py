"""
Crime Intelligence Platform — In-Memory TTL Cache

High-performance, async-safe in-memory TTL cache for vector embeddings,
frequent database query results, and search responses.
"""

from __future__ import annotations

import time
from typing import Any, Dict, Optional, Tuple

from app.core.logging import get_logger

logger = get_logger(__name__)


class TTLCache:
    """Async-safe in-memory cache with configurable TTL (Time-To-Live)."""

    def __init__(self, default_ttl: int = 300, max_size: int = 1000) -> None:
        self.default_ttl = default_ttl
        self.max_size = max_size
        self._store: Dict[str, Tuple[Any, float]] = {}

    def get(self, key: str) -> Optional[Any]:
        """Retrieve value if key exists and has not expired."""
        if key not in self._store:
            return None

        val, expires_at = self._store[key]
        if time.time() > expires_at:
            del self._store[key]
            return None

        return val

    def set(self, key: str, value: Any, ttl: Optional[int] = None) -> None:
        """Store value with expiration timestamp."""
        if len(self._store) >= self.max_size:
            # Evict oldest expired or first item
            self.clear_expired()
            if len(self._store) >= self.max_size:
                first_key = next(iter(self._store))
                del self._store[first_key]

        expire_time = time.time() + (ttl if ttl is not None else self.default_ttl)
        self._store[key] = (value, expire_time)

    def delete(self, key: str) -> None:
        """Remove key from cache."""
        self._store.pop(key, None)

    def clear_expired(self) -> int:
        """Evict all expired keys."""
        now = time.time()
        expired_keys = [k for k, (_, exp) in self._store.items() if now > exp]
        for k in expired_keys:
            del self._store[k]
        return len(expired_keys)

    def clear_all(self) -> None:
        """Clear entire cache store."""
        self._store.clear()


ttl_cache = TTLCache(default_ttl=600, max_size=2000)
