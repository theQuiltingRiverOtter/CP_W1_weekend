from palindrome import palindrome
import pytest


@pytest.mark.parametrize(
    "is_palindrome",
    [
        "racecar",
        "noon",
        "civic",
    ],
)
def test_palindrome_word(is_palindrome):
    assert palindrome(is_palindrome)


@pytest.mark.parametrize(
    "not_palindrome",
    [
        "nice",
        "bomb",
    ],
)
def test_not_palindrome_word(not_palindrome):
    assert not palindrome(not_palindrome)


def test_palindrome_number():
    assert palindrome(434)


def test_not_palindrome_number():
    assert not palindrome(123)


def test_palindrome_sentence():
    assert palindrome("Sore was I ere I saw Eros.")
    assert palindrome("A man, a plan, a canal -- Panama")
