from ..ml.ner import retrieve_named_entites
import pytest

class TestClass:
    def test_ner_whenTextIsOneSymbol_thenRaiseException(self):
        with pytest.raises(Exception):    
            retrieve_named_entites("d")

    def test_ner_whenTextIsOneWord_thenReturnListOfCorrectObjects(self):
        res = retrieve_named_entites("Paris")
        assert res == [{ "entity": "Paris",  "label": "GPE" }]