import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv

load_dotenv()


def send_email(form):
    sender = form.email
    receiver = os.getenv("GMAIL_RECEIVER")
    app_password = os.getenv("GMAIL_APP_PASSWORD")
    gmail_account = os.getenv("GMAIL_SENDER")

    if not gmail_account:
        raise RuntimeError("GMAIL_SENDER is not set. Set your Gmail account in environment variables.")
    if not receiver:
        raise RuntimeError("GMAIL_RECEIVER is not set. Set the destination email in environment variables.")
    if not app_password:
        raise RuntimeError("GMAIL_APP_PASSWORD is not set. Add it to your environment variables.")

    message = EmailMessage()
    message["From"] = gmail_account
    message["To"] = receiver
    message["Reply-To"] = sender
    message["Subject"] = "New Portfolio Contact"
    message.set_content(
        f"Name: {form.name}\n"
        f"Email: {form.email}\n\n"
        f"Message:\n{form.message}"
    )

    smtp = smtplib.SMTP("smtp.gmail.com", 587, timeout=10)
    try:
        smtp.starttls()
        smtp.login(gmail_account, app_password)
        smtp.send_message(message)
        return {"status": "success", "message": "Email sent successfully"}
    finally:
        smtp.quit()


if __name__ == "__main__":
    class DummyForm:
        name = "Test User"
        email = "someone@example.com"
        message = "This is a test message from the email sender."

    print(send_email(DummyForm()))