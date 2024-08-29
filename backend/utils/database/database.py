from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
load_dotenv("dev.env")

username = os.getenv("POSTGRES_USER") 
password = os.getenv("POSTGRES_PASSWORD")
DATABSE_URL = f"postgresql://{username}:{password}@localhost/ner"

engine = create_engine(DATABSE_URL)
SessionLocal = sessionmaker(autoflush=False, bind = engine)
Base = declarative_base()