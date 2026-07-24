"""
Crime Intelligence Platform — Vector Search & Indexing API Endpoints
"""

from __future__ import annotations

from pathlib import Path
from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import require_role
from app.core.gemini import gemini_client
from app.rag.retriever import rag_retriever
from app.rag.vector_store import vector_store
from app.schemas.chat import RAGSearchRequest, RAGSearchResponse
from app.schemas.document import VectorReindexResponse

router = APIRouter(tags=["Vector Search & Indexing"])


@router.post(
    "/rag/search",
    response_model=RAGSearchResponse,
    summary="Vector Semantic Search",
    description="Perform direct similarity search over the FAISS vector database.",
)
async def vector_search(
    request: RAGSearchRequest,
) -> RAGSearchResponse:
    evidence_items = await rag_retriever.retrieve_evidence(
        query=request.query,
        top_k=request.top_k,
    )

    return RAGSearchResponse(
        query=request.query,
        total_results=len(evidence_items),
        results=evidence_items,
    )


@router.post(
    "/vector/index",
    response_model=VectorReindexResponse,
    dependencies=[Depends(require_role(["admin", "analyst"]))],
    summary="Trigger Vector Re-Indexing",
    description="Batch index all CSV files in `Database/` and PDF acts in `Knowledge/` into FAISS vector store.",
)
async def reindex_vector_store() -> VectorReindexResponse:
    db_dir = Path("Database")
    knowledge_dir = Path("Knowledge")

    added = await vector_store.batch_index_workspace_datasets(db_dir, knowledge_dir)

    return VectorReindexResponse(
        status="success",
        message=f"Successfully indexed workspace datasets. Total vectors: {vector_store.total_vectors}.",
        total_documents=len(vector_store.metadata_store),
        total_chunks=added,
        vector_dimension=768,
    )
