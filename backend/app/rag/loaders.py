"""
Crime Intelligence Platform — RAG Document Loaders

Loads and parses heterogeneous legal & law enforcement document sources:
CSV datasets, PDF acts, DOCX briefings, and TXT files.
"""

from __future__ import annotations

import csv
from pathlib import Path
from typing import Any, Dict, List

from pypdf import PdfReader

from app.core.logging import get_logger

logger = get_logger(__name__)


class DocumentChunkData:
    """Container for parsed text chunk content and rich metadata."""

    def __init__(
        self,
        content: str,
        source: str,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> None:
        self.content = content
        self.source = source
        self.metadata = metadata or {}


class DocumentLoader:
    """Parser and loader for CSV datasets, PDF legal documents, and text files."""

    @classmethod
    def load_csv(cls, file_path: Path) -> List[DocumentChunkData]:
        """
        Load CSV file and convert rows into structured text chunks with metadata.

        Args:
            file_path: Path to CSV file

        Returns:
            List[DocumentChunkData]: List of parsed row chunks
        """
        chunks: List[DocumentChunkData] = []
        filename = file_path.name

        try:
            with open(file_path, mode="r", encoding="utf-8", errors="replace") as f:
                reader = csv.DictReader(f)
                for idx, row in enumerate(reader):
                    row_parts: List[str] = []
                    metadata: Dict[str, Any] = {"source_file": filename, "row_index": idx}

                    for k, v in row.items():
                        if v and v.strip():
                            val = v.strip()
                            row_parts.append(f"{k}: {val}")

                            # Extract metadata fields for vector filtering
                            k_lower = k.lower()
                            if "fir" in k_lower:
                                metadata["fir_id"] = val
                            elif "district" in k_lower:
                                metadata["district"] = val
                            elif "station" in k_lower or "ps" in k_lower:
                                metadata["police_station"] = val
                            elif "crime" in k_lower or "category" in k_lower:
                                metadata["category"] = val
                            elif "name" in k_lower or "accused" in k_lower:
                                metadata["accused_name"] = val

                    content = " | ".join(row_parts)
                    if content:
                        chunks.append(DocumentChunkData(content=content, source=filename, metadata=metadata))

            logger.info("csv_loaded_successfully", filename=filename, rows_count=len(chunks))
            return chunks

        except Exception as exc:
            logger.error("csv_load_failed", file=str(file_path), error=str(exc))
            return []

    @classmethod
    def load_pdf(cls, file_path: Path) -> List[DocumentChunkData]:
        """
        Load PDF file and extract page-by-page text chunks.

        Args:
            file_path: Path to PDF file

        Returns:
            List[DocumentChunkData]: List of page chunks
        """
        chunks: List[DocumentChunkData] = []
        filename = file_path.name

        try:
            reader = PdfReader(str(file_path))
            for page_num, page in enumerate(reader.pages, start=1):
                text = page.extract_text()
                if text and text.strip():
                    metadata = {
                        "source_file": filename,
                        "page_number": page_num,
                        "type": "legal_act",
                    }
                    chunks.append(
                        DocumentChunkData(
                            content=f"[{filename} - Page {page_num}]\n{text.strip()}",
                            source=filename,
                            metadata=metadata,
                        )
                    )

            logger.info("pdf_loaded_successfully", filename=filename, pages_count=len(chunks))
            return chunks

        except Exception as exc:
            logger.error("pdf_load_failed", file=str(file_path), error=str(exc))
            return []

    @classmethod
    def load_txt(cls, file_path: Path) -> List[DocumentChunkData]:
        """Load text file content."""
        filename = file_path.name
        try:
            content = file_path.read_text(encoding="utf-8", errors="replace")
            if content.strip():
                return [
                    DocumentChunkData(
                        content=content.strip(),
                        source=filename,
                        metadata={"source_file": filename},
                    )
                ]
            return []
        except Exception as exc:
            logger.error("txt_load_failed", file=str(file_path), error=str(exc))
            return []


document_loader = DocumentLoader()
