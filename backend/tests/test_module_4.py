"""
Module 4 Verification Tests
Tests Database Models creation, relationships, and metadata mapping using SQLite async engine.
"""

import pytest
from datetime import datetime, timezone
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy import select

from app.db.base_class import Base
from app.models import (
    User,
    District,
    PoliceStation,
    CrimeHead,
    CaseMaster,
    Accused,
    Victim,
    Complainant,
    Chargesheet,
    ArrestRecord,
    ChatSession,
    ChatMessage,
    DocumentIndex,
)


@pytest.mark.asyncio
async def test_database_models_schema():
    """Verify all models compile and create tables cleanly on async SQLite engine."""
    engine = create_async_engine("sqlite+aiosqlite:///:memory:", echo=False)
    async_session = async_sessionmaker(engine, expire_on_commit=False)

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with async_session() as session:
        # Create User
        user = User(
            email="inspector.patil@ksp.gov.in",
            hashed_password="hashed_pw_xyz",
            full_name="Patil B.",
            badge_number="KSP-88392",
            role="officer",
        )
        session.add(user)

        # Create District & Station
        district = District(name="Bengaluru Urban", code="BLR_URB", zone="Central")
        session.add(district)
        await session.flush()

        station = PoliceStation(
            name="Koramangala PS",
            code="PS_KRM_01",
            district_id=district.id,
            location="Koramangala 8th Block",
        )
        session.add(station)
        await session.flush()

        # Create Case & Accused
        case = CaseMaster(
            fir_number="FIR-2024-BLR-0091",
            district_name="Bengaluru Urban",
            police_station_name="Koramangala PS",
            police_station_id=station.id,
            act_section="IPC 379",
            brief_facts="Theft of two-wheeler outside commercial complex",
            status="Active",
        )
        session.add(case)
        await session.flush()

        accused = Accused(
            case_id=case.id,
            fir_number=case.fir_number,
            name="Ramesh Alias Guja",
            alias="Guja",
            phone="9876543210",
            status="Absconding",
        )
        session.add(accused)

        victim = Victim(
            case_id=case.id,
            fir_number=case.fir_number,
            name="Suresh Kumar",
            phone="9123456789",
            injury_type="None",
        )
        session.add(victim)

        # Create Chat Session & Messages
        chat_sess = ChatSession(
            session_id="sess-uuid-9912",
            user_id="inspector.patil@ksp.gov.in",
            title="Koramangala Theft Pattern Analysis",
        )
        session.add(chat_sess)
        await session.flush()

        msg = ChatMessage(
            session_id=chat_sess.session_id,
            sender="user",
            content="Show suspects associated with FIR-2024-BLR-0091",
        )
        session.add(msg)

        ai_msg = ChatMessage(
            session_id=chat_sess.session_id,
            sender="ai",
            content="Found suspect Ramesh Alias Guja associated with FIR-2024-BLR-0091.",
            confidence="96%",
            metadata_json={"refTags": ["FIR-2024-BLR-0091"], "suspects": ["Ramesh Alias Guja"]},
        )
        session.add(ai_msg)

        # Create Document Index
        doc = DocumentIndex(
            filename="Accused.csv",
            file_type="csv",
            file_path="Database/Accused.csv",
            chunk_count=150,
            status="indexed",
        )
        session.add(doc)

        await session.commit()

        # Query & Verify Relationships
        res_case = await session.execute(select(CaseMaster).where(CaseMaster.fir_number == "FIR-2024-BLR-0091"))
        fetched_case = res_case.scalar_one()
        assert fetched_case.brief_facts.startswith("Theft")

        res_sess = await session.execute(select(ChatSession).where(ChatSession.session_id == "sess-uuid-9912"))
        fetched_sess = res_sess.scalar_one()
        assert fetched_sess.title == "Koramangala Theft Pattern Analysis"

    await engine.dispose()
