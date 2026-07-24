"""
Crime Intelligence Platform — FAISS Vector Database Service

Dedicated vector service for chunking, embedding, metadata storage, FAISS similarity search,
filtering, and batch dataset indexing.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import faiss
import numpy as np

from app.core.config import get_settings
from app.core.gemini import gemini_client
from app.core.logging import get_logger
from app.rag.chunker import text_chunker
from app.rag.loaders import DocumentChunkData, document_loader

logger = get_logger(__name__)
settings = get_settings()


class FAISSVectorStore:
    """
    FAISS-powered vector database manager.
    Provides cosine similarity search over 768-dimensional Google Generative AI Embeddings.
    """

    DIMENSION = 768

    def __init__(self, vector_db_path: Optional[Path] = None) -> None:
        self.db_path = vector_db_path or settings.vector_store_path
        self.index: faiss.Index = faiss.IndexFlatIP(self.DIMENSION)
        self.metadata_store: List[Dict[str, Any]] = []

        # Attempt to load existing index if present
        self.load_index()

    @property
    def total_vectors(self) -> int:
        """Return total count of indexed vectors."""
        return self.index.ntotal

    def _normalize_vectors(self, vectors: List[List[float]]) -> np.ndarray:
        """Convert float list to L2-normalized float32 numpy array for Cosine similarity."""
        arr = np.array(vectors, dtype=np.float32)
        if arr.ndim == 1:
            arr = np.expand_dims(arr, axis=0)

        # L2 normalize
        norms = np.linalg.norm(arr, axis=1, keepdims=True)
        norms[norms == 0] = 1.0
        return arr / norms

    def add_documents(
        self,
        chunks: List[DocumentChunkData],
        embeddings: List[List[float]],
    ) -> int:
        """
        Add document chunks and corresponding embedding vectors to FAISS index.

        Args:
            chunks: List of DocumentChunkData objects
            embeddings: List of 768-dimensional float embedding vectors

        Returns:
            int: Number of vectors added
        """
        if not chunks or not embeddings:
            return 0

        norm_vectors = self._normalize_vectors(embeddings)
        self.index.add(norm_vectors)

        for chunk in chunks:
            self.metadata_store.append(
                {
                    "content": chunk.content,
                    "source": chunk.source,
                    "metadata": chunk.metadata,
                }
            )

        logger.info(
            "vectors_added_to_faiss",
            added_count=len(chunks),
            total_index_size=self.index.ntotal,
        )
        return len(chunks)

    def similarity_search(
        self,
        query_vector: List[float],
        top_k: int = 5,
        filter_category: Optional[str] = None,
        filter_district: Optional[str] = None,
    ) -> List[Tuple[Dict[str, Any], float]]:
        """
        Execute vector similarity search over FAISS index with metadata filtering.

        Args:
            query_vector: 768-dimensional query embedding vector
            top_k: Number of top nearest results to retrieve
            filter_category: Optional crime category filter
            filter_district: Optional district filter

        Returns:
            List[Tuple[Dict[str, Any], float]]: List of (chunk_dict, score) tuples
        """
        if self.index.ntotal == 0:
            logger.warning("similarity_search_called_on_empty_index")
            return []

        norm_query = self._normalize_vectors([query_vector])

        # Retrieve a broader set (top_k * 4) to allow metadata filtering
        search_k = min(top_k * 4, self.index.ntotal)
        distances, indices = self.index.search(norm_query, search_k)

        results: List[Tuple[Dict[str, Any], float]] = []

        for idx, dist in zip(indices[0], distances[0]):
            if idx < 0 or idx >= len(self.metadata_store):
                continue

            chunk_meta = self.metadata_store[idx]
            metadata = chunk_meta.get("metadata", {})

            # Filter checks
            if filter_category and filter_category.lower() not in str(metadata.get("category", "")).lower():
                continue
            if filter_district and filter_district.lower() not in str(metadata.get("district", "")).lower():
                continue

            results.append((chunk_meta, float(dist)))
            if len(results) >= top_k:
                break

        return results

    def save_index(self, path: Optional[Path] = None) -> bool:
        """Persist FAISS index and metadata store to disk."""
        target_dir = path or self.db_path
        target_dir.mkdir(parents=True, exist_ok=True)

        index_file = target_dir / "index.faiss"
        meta_file = target_dir / "metadata.json"

        try:
            faiss.write_index(self.index, str(index_file))
            meta_file.write_text(json.dumps(self.metadata_store, indent=2), encoding="utf-8")
            logger.info("faiss_index_saved", path=str(target_dir), total_vectors=self.index.ntotal)
            return True
        except Exception as exc:
            logger.error("faiss_save_failed", error=str(exc))
            return False

    def load_index(self, path: Optional[Path] = None) -> bool:
        """Load FAISS index and metadata store from disk if present."""
        target_dir = path or self.db_path
        index_file = target_dir / "index.faiss"
        meta_file = target_dir / "metadata.json"

        if index_file.exists() and meta_file.exists():
            try:
                self.index = faiss.read_index(str(index_file))
                self.metadata_store = json.loads(meta_file.read_text(encoding="utf-8"))
                logger.info("faiss_index_loaded", total_vectors=self.index.ntotal)
                return True
            except Exception as exc:
                logger.error("faiss_load_failed", error=str(exc))
                return False
        return False

    async def batch_index_workspace_datasets(
        self,
        database_dir: Path,
        knowledge_dir: Path,
    ) -> int:
        """
        Scan workspace `Database/` (CSV) and `Knowledge/` (PDF) directories,
        extract text, chunk content, generate embeddings, and build FAISS index.

        Args:
            database_dir: Path to `Database` directory containing CSV files
            knowledge_dir: Path to `Knowledge` directory containing legal PDF files

        Returns:
            int: Total chunks indexed
        """
        all_chunks: List[DocumentChunkData] = []

        # Load CSV files from Database/
        if database_dir.exists():
            for csv_path in database_dir.glob("*.csv"):
                raw_docs = document_loader.load_csv(csv_path)
                chunks = text_chunker.chunk_batch(raw_docs)
                all_chunks.extend(chunks)

        # Load PDF files from Knowledge/
        if knowledge_dir.exists():
            for pdf_path in knowledge_dir.glob("*.pdf"):
                raw_docs = document_loader.load_pdf(pdf_path)
                chunks = text_chunker.chunk_batch(raw_docs)
                all_chunks.extend(chunks)

        if not all_chunks:
            logger.warning("no_documents_found_for_batch_indexing")
            return 0

        # Generate embeddings in batches of 32
        embeddings: List[List[float]] = []
        for chunk in all_chunks:
            vec = await gemini_client.get_embedding(chunk.content)
            embeddings.append(vec)

        # Add to FAISS and persist
        added = self.add_documents(all_chunks, embeddings)
        self.save_index()
        return added


vector_store = FAISSVectorStore()
