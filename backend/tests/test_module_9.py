"""
Module 9 Verification Tests
Tests RAG Document Loader, Chunker, FAISS Vector Store, Retriever, and RAG Engine.
"""

from pathlib import Path
import pytest
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from app.db.base_class import Base
from app.rag.loaders import DocumentChunkData, DocumentLoader
from app.rag.chunker import TextChunker
from app.rag.vector_store import FAISSVectorStore
from app.rag.retriever import RAGRetriever, IntentType
from app.rag.engine import RAGEngine
from app.schemas.chat import RAGQueryRequest, ChatResponseData


def test_document_loader_and_chunker(tmp_path: Path):
    """Verify document loaders and text chunker logic."""
    # Test CSV loading
    csv_file = tmp_path / "test_cases.csv"
    csv_file.write_text("FIR_No,District,Brief_Facts\nFIR-01,Bengaluru,Robbery at ATM\nFIR-02,Mysuru,Bike theft", encoding="utf-8")

    chunks = DocumentLoader.load_csv(csv_file)
    assert len(chunks) == 2
    assert "Robbery" in chunks[0].content
    assert chunks[0].metadata.get("fir_id") == "FIR-01"

    # Test Text Chunker
    chunker = TextChunker(chunk_size=50, chunk_overlap=10)
    long_doc = DocumentChunkData(content="A" * 120, source="test.txt")
    sub_chunks = chunker.chunk_document(long_doc)
    assert len(sub_chunks) > 1


@pytest.mark.asyncio
async def test_faiss_vector_store_and_retriever():
    """Verify FAISS vector store creation, insertion, search, and retrieval."""
    store = FAISSVectorStore()

    chunk1 = DocumentChunkData(
        content="FIR-2024-BLR-0091: Vehicle theft by dark 2-wheeler gang post 21:00 hrs.",
        source="CaseMaster.csv",
        metadata={"fir_id": "FIR-2024-BLR-0091", "category": "Theft", "district": "Bengaluru"},
    )
    chunk2 = DocumentChunkData(
        content="NDPS Act Section 21: Punishment for contravention in relation to manufactured drugs.",
        source="NDPS Act.pdf",
        metadata={"category": "Narcotics", "type": "legal_act"},
    )

    # Use orthogonal vectors for clear directional distinction
    vec1 = [1.0] + [0.0] * 767
    vec2 = [0.0] + [1.0] + [0.0] * 766

    store.add_documents([chunk1, chunk2], [vec1, vec2])
    assert store.total_vectors >= 2

    # Test Similarity Search with query matching vec1 direction
    query_vec = [1.0] + [0.0] * 767
    hits = store.similarity_search(query_vector=query_vec, top_k=2)
    assert len(hits) > 0
    top_hit, score = hits[0]
    assert top_hit["metadata"].get("fir_id") == "FIR-2024-BLR-0091"

    # Test Retriever Intent Classification
    retriever = RAGRetriever()
    intent_suspect = retriever.analyze_intent("Show associates of suspect Ramesh Alias Guja")
    assert intent_suspect == IntentType.SUSPECT_LOOKUP

    intent_act = retriever.analyze_intent("Explain BNS Section 302 details")
    assert intent_act == IntentType.LEGAL_ACT_REFERENCE


@pytest.mark.asyncio
async def test_rag_engine_pipeline():
    """Verify end-to-end RAG Engine execution."""
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    rag_engine = RAGEngine()

    async with async_session() as db:
        req = RAGQueryRequest(
            prompt="Analyze vehicle theft pattern in Bengaluru",
            session_id="sess-pipeline-01",
            top_k=2,
        )

        response = await rag_engine.process_query(db, req, user_id="test.officer@ksp.gov.in")
        assert isinstance(response, ChatResponseData)
        assert response.answer != ""
        assert response.confidence != ""

    await engine.dispose()
