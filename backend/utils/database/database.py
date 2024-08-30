from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
load_dotenv(".env.dev")

username = os.getenv("POSTGRES_USER") 
password = os.getenv("POSTGRES_PASSWORD")
host = os.getenv("POSTGRES_HOST")
DATABSE_URL = f"postgresql://{username}:{password}@{host}/online-seller"

engine = create_engine(DATABSE_URL)
SessionLocal = sessionmaker(autoflush=False, bind = engine)
Base = declarative_base()