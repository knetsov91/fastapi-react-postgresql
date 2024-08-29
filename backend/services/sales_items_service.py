from repositories.user_repository import get_user_by_id
from repositories import sales_items_repository 
from sqlalchemy.orm import Session
from data.schemas.SalesItem import SalesItemCreate, SalesItemBase

def create_salse_item(db: Session, owner_id: int, salesItem: SalesItemBase):
    user = get_user_by_id(db=db, id=owner_id)

    if not user:
        raise ValueError("Try again")
    
    new_sales_item =  SalesItemCreate(
       **salesItem.model_dump(),
        owner_id=owner_id
    )
    
    return sales_items_repository.create_sales_item(db, new_sales_item)