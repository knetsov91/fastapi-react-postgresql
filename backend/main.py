from fastapi import FastAPI, Body
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
from ml.ner import retrieve_named_entites
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:3000",
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def index():
    return "index"


@app.post("/ner")
async def get_entities(text: Annotated[str,  Body(embed=True)]  = "das"):
    print(text)
    # return ""
    return retrieve_named_entites(text)  