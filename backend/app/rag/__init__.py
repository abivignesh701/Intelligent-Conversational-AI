"""
Crime Intelligence Platform — RAG Engine Package

Exports document loaders, chunker, vector store, retriever, and RAG pipeline engine.
"""

from app.rag.chunker import TextChunker, text_chunker
from app.rag.engine import RAGEngine, rag_engine
from app.rag.loaders import DocumentChunkData, DocumentLoader, document_loader
from app.rag.retriever import IntentType, RAGRetriever, rag_retriever
from app.rag.vector_store import FAISSVectorStore, vector_store

__all__ = [
    "DocumentLoader",
    "document_loader",
    "DocumentChunkData",
    "TextChunker",
    "text_chunker",
    "FAISSVectorStore",
    "vector_store",
    "IntentType",
    "RAGRetriever",
    "rag_retriever",
    "RAGEngine",
    "rag_engine",
]
