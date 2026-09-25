from pydantic import BaseModel, EmailStr, Field

class FormRequest(BaseModel):
    name:str =Field(min_length=3,max_length = 50)
    email:EmailStr
    message:str =Field(min_length=10,max_length = 500)