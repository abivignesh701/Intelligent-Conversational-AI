"""
Module 6 Verification Tests
Tests Domain Repositories using SQLite in-memory async database.
"""

import pytest
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from app.db.base_class import Base
from app.repositories import (
    user_repository,
    case_repository,
    accused_repository,
    chat_session_repository,
    chat_message_repository,
    document_index_repository,
)
from app.schemas.auth import UserCreate
from app.schemas.crime import CaseMasterCreate, AccusedCreate


@pytest.mark.asyncio
async def test_domain_repositories_crud():
    """Verify repository operations across domain models on async SQLite engine."""
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with async_session() as db:
        # Test User Repository
        user_in = UserCreate(
            email="sp.deshmukh@ksp.gov.in",
            password="securepassword123",
            full_name="Deshmukh SP",
            badge_number="KSP-10022",
            rank="SP",
            role="admin",
        )
        created_user = await user_repository.create(db, user_in)
        assert created_user.id is not None

        by_email = await user_repository.get_by_email(db, "sp.deshmukh@ksp.gov.in")
        assert by_email is not None
        assert by_email.full_name == "Deshmukh SP"

        by_badge = await user_repository.get_by_badge_number(db, "KSP-10022")
        assert by_badge is not None
        assert by_badge.id == created_user.id

        # Test Case Repository
        case_in = CaseMasterCreate(
            fir_number="FIR-2024-MYS-0044",
            district_name="Mysuru City",
            police_station_name="Devaraja PS",
            crime_head_name="Cyber Crime",
            act_section="IT Act 66D",
            brief_facts="Financial phishing fraud targeting bank customers",
            status="Active",
        )
        created_case = await case_repository.create(db, case_in)
        assert created_case.id is not None

        fir_case = await case_repository.get_by_fir_number(db, "FIR-2024-MYS-0044")
        assert fir_case is not None
        assert fir_case.district_name == "Mysuru City"

        # Search cases
        cases, total = await case_repository.search_cases(
            db, query_text="phishing", category="Cyber", limit=10
        )
        assert total == 1
        assert cases[0].fir_number == "FIR-2024-MYS-0044"

        # Test Accused Repository & Find Associates
        accused_1 = await accused_repository.create(
            db,
            AccusedCreate(
                case_id=created_case.id,
                fir_number="FIR-2024-MYS-0044",
                name="Vikram Kumar",
                alias="Vicky",
                status="Absconding",
            ),
        )
        accused_2 = await accused_repository.create(
            db,
            AccusedCreate(
                case_id=created_case.id,
                fir_number="FIR-2024-MYS-0044",
                name="Anand Sharma",
                alias="Anu",
                status="Arrested",
            ),
        )

        associates = await accused_repository.find_associates(db, "Vikram Kumar")
        assert len(associates) == 1
        assert associates[0].name == "Anand Sharma"

        # Test Chat Session & Message Repository
        session = await chat_session_repository.get_or_create_session(
            db, session_id="sess-7711", user_id="sp.deshmukh@ksp.gov.in", title="Cyber Analysis"
        )
        assert session.session_id == "sess-7711"

        msg1 = await chat_message_repository.append_message(
            db, session_id="sess-7711", sender="user", content="Show associates of Vikram Kumar"
        )
        msg2 = await chat_message_repository.append_message(
            db, session_id="sess-7711", sender="ai", content="Associated suspect Anand Sharma found under FIR-2024-MYS-0044."
        )

        history = await chat_message_repository.get_history(db, "sess-7711")
        assert len(history) == 2
        assert history[0].sender == "user"
        assert history[1].sender == "ai"

        # Test Document Index Repository
        doc = await document_index_repository.create(
            db,
            {
                "filename": "CaseMaster.csv",
                "file_type": "csv",
                "file_path": "Database/CaseMaster.csv",
                "file_size_bytes": 72678,
                "status": "pending",
            },
        )
        assert doc.status == "pending"

        pending_docs = await document_index_repository.list_pending(db)
        assert len(pending_docs) == 1

        updated_doc = await document_index_repository.update_indexing_status(
            db, doc.id, status="indexed", chunk_count=350
        )
        assert updated_doc.status == "indexed"
        assert updated_doc.chunk_count == 350

    await engine.dispose()
