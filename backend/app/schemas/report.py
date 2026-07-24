"""
Crime Intelligence Platform — Report Generation Schemas

Pydantic models for generating intelligence reports, tactical briefs, and PDF/Markdown downloads.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field


class ReportGenerationRequest(BaseModel):
    """Payload for initiating intelligence report generation."""

    title: str = Field(default="Tactical Intelligence Briefing")
    report_type: str = Field(default="briefing", description="Type: briefing, cyber_forensic, suspect_dossier, case_summary")
    fir_number: Optional[str] = Field(default=None, description="Target FIR number for report")
    suspect_name: Optional[str] = Field(default=None, description="Target suspect name for report")
    include_network_analysis: bool = Field(default=True)
    include_evidence_summary: bool = Field(default=True)
    include_recommendations: bool = Field(default=True)
    output_format: str = Field(default="markdown", description="Format: markdown, pdf, json")


class ReportGenerationResponse(BaseModel):
    """Response payload containing generated intelligence report."""

    report_id: str
    title: str
    report_type: str = Field(default="briefing")
    generated_at: str
    output_format: str = Field(default="markdown")
    content_markdown: str
    download_url: Optional[str] = None
    summary: Optional[str] = None
    summary_findings: List[str] = Field(default_factory=list)
    referenced_firs: List[str] = Field(default_factory=list)
