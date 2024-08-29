import bcrypt
import jwt
import dotenv 
import os
from sqlalchemy.orm import Session
from repositories.user_repository import get_user_by_email
from repositories import auth_repository, user_repository
from data.schemas.User import UserLogin, UserAuthenticated
from utils.jwt_tokens import generate_jwt, validate_jwt_token
dotenv.load_dotenv("dev.env")
def register(db: Session, user: UserLogin):
    user_found = user_repository.get_user_by_email(db, email=user.email)
    if user_found:
        raise ValueError("Email")
    
    salt = bcrypt.gensalt()
    user.password = bcrypt.hashpw(user.password.encode('utf-8'), salt).decode('utf-8')
    return auth_repository.register(db, user)

def login(db: Session, user: UserLogin):
    user_found = user_repository.get_user_by_email(db, user.email)
    print(user_found.password)
    if not user_found:
        raise ValueError("Cannot login")
    salt = bcrypt.gensalt()
    
    if not bcrypt.checkpw(user.password.encode('utf-8'), user_found.password.encode('utf-8')):
        raise ValueError("Something went wrong")
    secret = os.getenv("JWT_SECRET")
    auth_user = UserAuthenticated(email= user_found.email,
                                id = user_found.id).model_dump()
    token = generate_jwt(payload=auth_user,secret=secret)
    return {"token": token}
