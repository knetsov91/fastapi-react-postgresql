from sqlalchemy.orm import Session
from ..data.schemas.User import UserLogin
from ..data.models.UserModel import User


def register(db_conn: Session, user: UserLogin):

    new_user = User(email = user.email, password = user.password)

    db_conn.add(new_user)
    db_conn.commit()
    db_conn.refresh(new_user)

    return new_user