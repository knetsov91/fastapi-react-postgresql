from sqlalchemy.orm import Session
from ..data.schemas.SalesItem import SalesItemCreate
from ..data.models.SalesItem import SalesItemModel


def create_sales_item(db: Session, sales_item: SalesItemCreate):
    new_sales_item = SalesItemModel(**sales_item.dict())

    db.add(new_sales_item)
    db.commit()
    db.refresh(new_sales_item)
    
    return new_sales_item