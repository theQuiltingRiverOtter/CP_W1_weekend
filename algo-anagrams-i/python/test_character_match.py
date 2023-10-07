from character_match import is_character_match, anagrams_for
import pytest


# test is_character_match() function
def test_is_character_match():
    assert is_character_match("charm", "march") == True


def test_is_character_match_both_cases():
    assert is_character_match("CharM", "mARcH") == True


def test_is_character_match_include_numbers():
    assert is_character_match("abcde2", "c2abed") == True


def test_is_not_character_match():
    assert is_character_match("zach", "attack") == False


def test_is_character_match_sentence():
    assert is_character_match("Anna Madrigal", "A man and a girl") == True


# test anagrams_for() function


# set up fixture to provide default list of words to search
@pytest.fixture
def list_of_words():
    return ["threads", "trashed", "hardest", "hatreds", "hounds"]


def test_anagrams_for(list_of_words):
    returned_anagrams = anagrams_for("threads", list_of_words)
    assert returned_anagrams == [
        "threads",
        "trashed",
        "hardest",
        "hatreds",
    ]
    assert len(returned_anagrams) == 4


def test_anagrams_for_returns_none(list_of_words):
    assert anagrams_for("apple", list_of_words) == []
