from fastapi.middleware.cors import CORSMiddleware

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
    "https://mesumgazi.in",
    "https://www.mesumgazi.in",
]

def configure_cors(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=ALLOWED_ORIGINS,
        allow_credentials=False,   # not using cookies, keep it simple
        allow_methods=["POST", "GET", "OPTIONS"],
        allow_headers=["Content-Type"],
    )