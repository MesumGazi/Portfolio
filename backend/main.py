from fastapi import FastAPI, HTTPException
from data.form import FormRequest
from config.cors import configure_cors
from db import save_contact


app = FastAPI()
configure_cors(app)


@app.post("/api/contact")
def form_request(form: FormRequest) -> dict:
    try:
        result = save_contact(form)
        return {"status": "ok", "db_status": result}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


