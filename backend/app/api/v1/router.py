"""
Crime Intelligence Platform — Central API Router

Assembles and mounts all modular sub-routers under the /api prefix.
"""

from fastapi import APIRouter

from app.api.v1.auth import router as auth_router
from app.api.v1.cases import router as cases_router
from app.api.v1.chat import router as chat_router
from app.api.v1.criminals import router as criminals_router
from app.api.v1.network import router as network_router
from app.api.v1.rag import router as rag_router
from app.api.v1.report import router as report_router
from app.api.v1.upload import router as upload_router

api_router = APIRouter(prefix="/api")

api_router.include_router(auth_router)
api_router.include_router(chat_router)
api_router.include_router(rag_router)
api_router.include_router(cases_router)
api_router.include_router(criminals_router)
api_router.include_router(network_router)
api_router.include_router(report_router)
api_router.include_router(upload_router)
