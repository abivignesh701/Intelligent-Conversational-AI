"""
Crime Intelligence Platform — Network Analysis Schemas

Pydantic models for criminal relationship discovery, 2D/3D graph visualization payload,
nodes (suspects, devices, vehicles, addresses), edges, and centralities.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field


class NetworkNodeSchema(BaseModel):
    """Individual entity node in the criminal relationship graph."""

    id: str = Field(description="Unique node identifier (e.g. accused-101, dev-88)")
    label: str = Field(description="Display label or suspect name")
    type: str = Field(description="Node type: suspect, device, vehicle, address, financial")
    confidence: float = Field(default=0.9, ge=0.0, le=1.0)
    alias: Optional[str] = None
    realName: Optional[str] = None
    status: str = Field(default="Active", description="Status: Active, Absconding, Custody")
    connectionsCount: int = Field(default=0)
    details: Optional[Dict[str, Any]] = None
    pos: List[float] = Field(default_factory=lambda: [0.0, 0.0, 0.0], description="3D coordinate [x, y, z]")


class NetworkEdgeSchema(BaseModel):
    """Relationship edge connecting two entities."""

    id: Optional[str] = None
    source: str = Field(description="Source node ID")
    target: str = Field(description="Target node ID")
    relation: str = Field(description="Relationship type (e.g. Co-Accused, Call-Log, Shared-Vehicle)")
    weight: float = Field(default=1.0)


class NetworkGraphRequest(BaseModel):
    """Request payload for criminal network analysis."""

    suspect_id: Optional[str] = Field(default=None, description="Center graph on specific suspect")
    fir_number: Optional[str] = Field(default=None, description="Center graph on specific FIR")
    depth: int = Field(default=2, ge=1, le=4, description="Graph traversal depth")
    min_confidence: float = Field(default=0.5, ge=0.0, le=1.0)


class NetworkGraphResponse(BaseModel):
    """Response payload for criminal network graph visualization."""

    nodes: List[NetworkNodeSchema] = Field(default_factory=list)
    edges: List[NetworkEdgeSchema] = Field(default_factory=list)
    total_suspects: int = 0
    total_connections: int = 0
    critical_nodes: List[str] = Field(default_factory=list)
