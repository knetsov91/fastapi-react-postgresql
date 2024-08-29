import bcrypt
from sqlalchemy.orm import Session
from repositories.user_repository import get_user_by_email
from repositories import auth_repository, user_repository
from data.schemas.User import UserLogin

def register(db: Session, user: UserLogin):
    user_found = user_repository.get_user_by_email(db, email=user.email)
    if user_found:
        raise ValueError("Try again")
    
    salt = bcrypt.gensalt()
    user.password = bcrypt.hashpw(user.password.encode('utf-8'), salt)
    return auth_repository.register(db, user)