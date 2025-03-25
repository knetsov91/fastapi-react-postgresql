from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, String, Integer
from ...utils.database.database import Base

class SalesItemModel(Base):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True,autoincrement=True)
    description = Column(String, nullable=False)
    price = Column(Integer)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")