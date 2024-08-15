import spacy

nlp = spacy.load("en_core_web_sm")

content = """Bergamo is a city in the alpine Lombardy region of Northern Italy, approximately 40 km (25 mi) northeast of Milan, and about 30 km (19 mi) from Switzerland, the alpine lakes Como and Iseo and 70 km (43 mi) from Garda and Maggiore. The Bergamo Alps (Alpi Orobie) begin immediately north of the city.
With a population of around 120,000, Bergamo is the fourth-largest city in Lombardy. Bergamo is the seat of the Province of Bergamo, which counts over 1,103,000 residents (2020). The metropolitan area of Bergamo extends beyond the administrative city limits, spanning over a densely urbanized area with slightly less than 500,000 inhabitants.
[3] The Bergamo metropolitan area is itself part of the broader Milan metropolitan area, home to over 8 million people"""


def retrieve_named_entites(text: str) -> list[dict[str, str]]:
    if len(text) < 2:
        raise Exception("Invalid text") 
    res:list = []
    doc = nlp(text)

    for ent in doc.ents:
       

        res.append({"entity": ent.text, "label": ent.label_ })
        print(f"{ent.text} {ent.label_}")

    return res

