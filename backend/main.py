from fastapi import FastAPI, Body, Path, HTTPException
from typing import Annotated
from starlette.middleware.cors import CORSMiddleware
import os
from os.path import join, dirname
from utils.database.database import SessionLocal, engine, Base
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from repositories import user_repository, auth_repository, sales_items_repository
from utils.database.database import SessionLocal, engine
from data.schemas.User import UserLogin,User
from  data.schemas.User import User as UserSchema 
from data.schemas.SalesItem import SalesItemBase, SalesItemCreate
from  data.models import UserModel
from fastapi import Depends
from services.sales_items_service import create_salse_item
from services import auth_service  
# load_dotenv(dotenv_path=join(dirname(__file__),"dev.env"))
app = FastAPI()

origins = [f"localhost:{os.environ.get('FRONTEND_PORT')}",
           f"http://localhost:{os.environ.get('FRONTEND_PORT')}"]
print(origins)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

Base.metadata.create_all(bind=engine, checkfirst=True)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/register", response_model=UserSchema )
def login(user: UserLogin , db: Session= Depends(get_db)):
    try:
        return auth_service.register(db, user)
    except Exception as e:
        raise HTTPException(status_code=400, detail="Something went wrong")
    

@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    return user_repository.get_users(db) 

@app.post('/items/{owner_id}', response_model=SalesItemCreate)
def f(salesItem: SalesItemBase,
      owner_id: Annotated[int, Path()],
      db: Session = Depends(get_db)
    ):

    sales_item = create_salse_item(db, owner_id, salesItem=salesItem)
    return sales_item