from pydantic import BaseModel

class SalesItemBase(BaseModel):
    description: str
    price: int
    
class SalesItemCreate(SalesItemBase):
    owner_id: int
class SalesItem(SalesItemBase):
    id: int
    
    class Config:
        from_attributes = True