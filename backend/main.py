from fastapi import FastAPI, HTTPException
from data.form import FormRequest
from config.cors import configure_cors
from email_sender.email_sender import send_email


app = FastAPI()
configure_cors(app)


@app.post("/api/contact")
def form_request(form: FormRequest) -> dict:
    try:
        result = send_email(form)
        return {"status": "ok", "email_status": result}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


