from ...utils.database.database import Base
from sqlalchemy.orm import  relationship
from sqlalchemy import Integer, String, Column, Boolean, DateTime
from datetime import datetime

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    
    items = relationship("SalesItemModel", back_populates="owner")