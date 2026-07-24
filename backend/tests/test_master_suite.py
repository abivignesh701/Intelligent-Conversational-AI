"""
Module 14 — Master Integration Test Suite

Verifies complete end-to-end user workflows across all 14 modules:
Authentication -> Case Management -> RAG Search -> AI Reasoning -> Memory Retention ->
Network Analysis -> Report Generation -> Document Indexing.
"""

import io
import pytest


@pytest.mark.asyncio
async def test_full_end_to_end_investigation_workflow(test_client, auth_headers):
    """
    Simulates a full crime investigation workflow performed by a KSP Senior Analyst:
    1. Authenticate & fetch user profile
    2. Create a new FIR case record
    3. Perform direct vector search
    4. Execute multi-turn AI intelligence chat (with anaphora follow-up memory resolution)
    5. Discover criminal 3D network relationships
    6. Generate intelligence briefing report
    7. Download generated report file
    """

    # 1. Verify User Profile (/api/auth/me)
    profile_resp = test_client.get("/api/auth/me", headers=auth_headers)
    assert profile_resp.status_code == 200
    assert profile_resp.json()["email"] == "master.analyst@ksp.gov.in"

    # 2. Create FIR Case Record (/api/cases)
    case_data = {
        "fir_number": "FIR-2024-BLR-0999",
        "district_name": "Bengaluru City",
        "police_station_name": "Indiranagar PS",
        "crime_head_name": "Cyber Theft",
        "act_section": "BNS Section 303(2)",
        "brief_facts": "High-value electronic gadget theft by two suspects on dark 2-wheeler near Indiranagar 100ft Road.",
        "status": "Active",
    }
    create_case_resp = test_client.post("/api/cases", json=case_data, headers=auth_headers)
    assert create_case_resp.status_code == 201
    assert create_case_resp.json()["fir_number"] == "FIR-2024-BLR-0999"

    # 3. Direct Vector Search (/api/rag/search)
    search_resp = test_client.post(
        "/api/rag/search",
        json={"query": "electronic gadget theft Indiranagar 2-wheeler", "top_k": 3},
    )
    assert search_resp.status_code == 200
    assert "results" in search_resp.json()

    # 4. Multi-Turn RAG Chat Session (/api/chat)
    # Turn 1
    chat_turn1 = test_client.post(
        "/api/chat",
        json={
            "prompt": "Analyze theft pattern under FIR-2024-BLR-0999 involving suspect Ramesh Alias Guja",
            "session_id": "sess-master-001",
        },
        headers=auth_headers,
    )
    assert chat_turn1.status_code == 200
    assert "text" in chat_turn1.json()

    # Turn 2: Follow-up question with pronoun "What about him?"
    chat_turn2 = test_client.post(
        "/api/chat",
        json={
            "prompt": "What about him?",
            "session_id": "sess-master-001",
        },
        headers=auth_headers,
    )
    assert chat_turn2.status_code == 200
    assert "text" in chat_turn2.json()

    # Turn 3: Follow-up question "Any associates?"
    chat_turn3 = test_client.post(
        "/api/chat",
        json={
            "prompt": "Any associates?",
            "session_id": "sess-master-001",
        },
        headers=auth_headers,
    )
    assert chat_turn3.status_code == 200
    assert "text" in chat_turn3.json()

    # 5. Criminal Network Topology Analysis (/api/network)
    network_resp = test_client.get("/api/network?depth=2")
    assert network_resp.status_code == 200
    net_data = network_resp.json()
    assert "nodes" in net_data
    assert "edges" in net_data
    assert len(net_data["nodes"]) > 0

    # 6. Generate Intelligence Report (/api/report)
    report_req = {
        "title": "Tactical Intelligence Briefing — Indiranagar Cyber Theft Cluster",
        "report_type": "briefing",
        "fir_number": "FIR-2024-BLR-0999",
        "suspect_name": "Ramesh Alias Guja",
    }
    report_resp = test_client.post("/api/report", json=report_req, headers=auth_headers)
    assert report_resp.status_code == 201
    rep_data = report_resp.json()
    assert "download_url" in rep_data

    # 7. Download Generated Report (/api/report/download/{file_name})
    download_url = rep_data["download_url"]
    file_name = download_url.split("/")[-1]
    down_resp = test_client.get(f"/api/report/download/{file_name}")
    assert down_resp.status_code == 200
    assert "KARNATAKA STATE POLICE" in down_resp.text


@pytest.mark.asyncio
async def test_document_upload_and_reindex_flow(test_client, auth_headers):
    """Verify document file upload and vector store re-indexing flow."""
    # 1. Upload CSV dataset
    file_content = b"FIR_No,District,Brief_Facts\nFIR-2024-MYS-0044,Mysuru,Transit robbery"
    upload_resp = test_client.post(
        "/api/upload",
        files={"file": ("mysuru_cases.csv", io.BytesIO(file_content), "text/csv")},
        headers=auth_headers,
    )
    assert upload_resp.status_code == 201
    doc_id = upload_resp.json()["id"]

    # 2. Check upload status
    status_resp = test_client.get(f"/api/upload/status/{doc_id}")
    assert status_resp.status_code == 200
    assert status_resp.json()["filename"] == "mysuru_cases.csv"

    # 3. Trigger Vector Re-indexing (/api/vector/index)
    reindex_resp = test_client.post("/api/vector/index", headers=auth_headers)
    assert reindex_resp.status_code == 200
    assert reindex_resp.json()["status"] == "success"
