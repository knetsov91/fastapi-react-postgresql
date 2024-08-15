from fastapi import FastAPI, Body
from typing import Annotated
from ml.ner import retrieve_named_entites
app = FastAPI()


@app.get("/")
def index():
    return "index"

@app.post("/ner")
async def get_entities(text: Annotated[str,  Body()]  = "das"):
    print(text)
    # return ""
    return retrieve_named_entites(text)  