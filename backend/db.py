import os

import psycopg2
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), "..", ".env"))


def save_contact(form):
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        raise RuntimeError("DATABASE_URL is not set. Add it to your environment variables.")

    conn = psycopg2.connect(database_url)

    try:
        with conn.cursor() as cur:
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS contact_messages (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    message TEXT NOT NULL,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
                )
                """
            )

            cur.execute(
                """
                INSERT INTO contact_messages (name, email, message)
                VALUES (%s, %s, %s)
                """,
                (form.name, form.email, form.message),
            )

        conn.commit()
        return {"status": "saved", "message": "Contact form saved successfully"}
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()
