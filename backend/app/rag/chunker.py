"""
Crime Intelligence Platform — Text Chunker

Splits large documents and text blocks into overlapping chunks for vector embedding.
"""

from __future__ import annotations

from typing import List

from app.rag.loaders import DocumentChunkData


class TextChunker:
    """Configurable text chunker with overlap and metadata retention."""

    def __init__(self, chunk_size: int = 500, chunk_overlap: int = 100) -> None:
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap

    def chunk_document(self, doc: DocumentChunkData) -> List[DocumentChunkData]:
        """
        Split a document into sub-chunks if content length exceeds chunk_size.

        Args:
            doc: DocumentChunkData object

        Returns:
            List[DocumentChunkData]: Sub-chunked list of document objects
        """
        content = doc.content
        if len(content) <= self.chunk_size:
            return [doc]

        sub_chunks: List[DocumentChunkData] = []
        start = 0
        chunk_idx = 0

        while start < len(content):
            end = start + self.chunk_size
            chunk_text = content[start:end]

            chunk_meta = dict(doc.metadata)
            chunk_meta["chunk_id"] = chunk_idx

            sub_chunks.append(
                DocumentChunkData(
                    content=chunk_text,
                    source=doc.source,
                    metadata=chunk_meta,
                )
            )

            start += self.chunk_size - self.chunk_overlap
            chunk_idx += 1

        return sub_chunks

    def chunk_batch(self, docs: List[DocumentChunkData]) -> List[DocumentChunkData]:
        """Chunk a batch of documents."""
        all_chunks: List[DocumentChunkData] = []
        for doc in docs:
            all_chunks.extend(self.chunk_document(doc))
        return all_chunks


text_chunker = TextChunker()
