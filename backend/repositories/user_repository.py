from sqlalchemy.orm import Session
from ..data.schemas.User import UserLogin
from ..data.models.UserModel import User

def get_user_by_email( db: Session, email:str) -> User:
   
   return db.query(User).filter(User.email == email).first()

def get_user_by_id(db: Session, id: int):
   return db.query(User).filter(User.id == id).first()

def get_users(db: Session ):
    return db.query(User).all()