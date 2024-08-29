from sqlalchemy.orm import Session
from data.schemas.User import UserLogin
from data.models.UserModel import User

def get_user_by_email( db: Session, email:str):
   
   return db.query(User).filter(User.email == email).first()

def get_users(db: Session ):
    return db.query(User).all()