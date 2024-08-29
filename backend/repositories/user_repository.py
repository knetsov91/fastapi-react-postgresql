from sqlalchemy.orm import Session
from data.dtos.UserDTO import UserCreate, UserDto
from data.models.User import User

# def __init__(db: Session):
#     db = Session()

def create_user( db: Session, user: UserCreate):
   
    db_user = User(email = user.email, hashed_password = user.password)

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return db_user
