from pydantic import BaseModel


class UserBase(BaseModel):
    email: str

class UserLogin(UserBase):
    password: str

class User(UserBase):
    id: int
    searches: list = []

    class Config:
        from_attributes = True