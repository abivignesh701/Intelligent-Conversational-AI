"""
Module 7 Verification Tests
Tests Business Services using SQLite in-memory async engine.
"""

import pytest
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from app.db.base_class import Base
from app.services import (
    auth_service,
    crime_service,
    chat_memory_service,
    document_service,
)
from app.schemas.auth import UserCreate, UserLogin
from app.schemas.crime import CaseMasterCreate, CrimeSearchFilter, AccusedCreate
from app.schemas.chat import ChatResponseData, EvidenceItem
from app.core.exceptions import AuthenticationError, DuplicateError, NotFoundError


@pytest.mark.asyncio
async def test_business_services():
    """Verify business logic across all service layers."""
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with async_session() as db:
        # Test Auth Service Registration & Login
        user_in = UserCreate(
            email="dsp.rao@ksp.gov.in",
            password="DSPPassword99#",
            full_name="Rao DSP",
            badge_number="KSP-33100",
            rank="DSP",
            role="analyst",
        )
        user_res = await auth_service.register_user(db, user_in)
        assert user_res.email == "dsp.rao@ksp.gov.in"
        assert user_res.rank == "DSP"

        # Duplicate Registration Protection
        with pytest.raises(DuplicateError):
            await auth_service.register_user(db, user_in)

        # Successful Login
        token_resp = await auth_service.authenticate_user(
            db, UserLogin(email="dsp.rao@ksp.gov.in", password="DSPPassword99#")
        )
        assert token_resp.access_token is not None
        assert token_resp.user.email == "dsp.rao@ksp.gov.in"

        # Failed Login
        with pytest.raises(AuthenticationError):
            await auth_service.authenticate_user(
                db, UserLogin(email="dsp.rao@ksp.gov.in", password="WrongPassword!")
            )

        # Test Crime Service Case Creation & Search
        case_in = CaseMasterCreate(
            fir_number="FIR-2024-BLR-0450",
            district_name="Bengaluru City",
            police_station_name="Cubbon Park PS",
            crime_head_name="Narcotics",
            act_section="NDPS Act 21",
            brief_facts="Seizure of contraband substance during routine vehicle check",
            status="Active",
        )
        case_res = await crime_service.create_case(db, case_in)
        assert case_res.fir_number == "FIR-2024-BLR-0450"

        fetched_case = await crime_service.get_case_by_fir(db, "FIR-2024-BLR-0450")
        assert fetched_case.brief_facts.startswith("Seizure")

        # Search Cases
        search_filter = CrimeSearchFilter(query="contraband", category="Narcotics", page=1, page_size=10)
        found_cases, total = await crime_service.search_cases(db, search_filter)
        assert total == 1
        assert found_cases[0].fir_number == "FIR-2024-BLR-0450"

        # Test Chat Memory Service Turn Preservation
        sess_res = await chat_memory_service.get_or_create_session(
            db, session_id="sess-narc-01", user_id="dsp.rao@ksp.gov.in", title="Narcotics Investigation"
        )
        assert sess_res.session_id == "sess-narc-01"

        ai_data = ChatResponseData(
            answer="Analysis confirms NDPS Act violation near Cubbon Park.",
            confidence="95%",
            reasoning="Grounded by FIR-2024-BLR-0450 brief facts.",
            evidence=[EvidenceItem(fir_id="FIR-2024-BLR-0450", source="CaseMaster.csv")],
            fir_ids=["FIR-2024-BLR-0450"],
        )

        await chat_memory_service.save_turn(
            db,
            session_id="sess-narc-01",
            user_prompt="Analyze narcotics seizure at Cubbon Park",
            ai_response_data=ai_data,
        )

        detail = await chat_memory_service.get_session_detail(db, "sess-narc-01")
        assert len(detail.messages) == 2
        assert detail.messages[0].sender == "user"
        assert detail.messages[1].sender == "ai"
        assert detail.messages[1].confidence == "95%"

        # Test Document Service Upload Registration
        doc_upload = await document_service.register_upload(
            db,
            filename="NDPS Act.pdf",
            file_type="pdf",
            file_path="Knowledge/NDPS Act.pdf",
            file_size_bytes=719612,
        )
        assert doc_upload.filename == "NDPS Act.pdf"
        assert doc_upload.status == "pending"

        doc_status = await document_service.get_document_status(db, doc_upload.id)
        assert doc_status.file_size_bytes == 719612

    await engine.dispose()
