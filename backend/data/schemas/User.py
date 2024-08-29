from pydantic import BaseModel
from data.schemas.SalesItem import SalesItem

class UserBase(BaseModel):
    email: str

class UserLogin(UserBase):
    password: str

class UserAuthenticated(UserBase):
    id: int

class User(UserBase):
    id: int
    items: list[SalesItem] = []

    class Config:
        from_attributes = True