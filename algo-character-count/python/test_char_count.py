from char_count import char_count
import pytest


@pytest.mark.parametrize(
    "test_string, result_list",
    [
        ("", []),
        ("aaabbbc", [["a", 3], ["b", 2], ["c", 1]]),
        (
            "an apple a day will keep the doctor away",
            [
                ["a", 6],
                ["e", 4],
                ["l", 3],
                ["p", 3],
                ["d", 2],
                ["o", 2],
                ["t", 2],
                ["w", 2],
                ["y", 2],
                ["c", 1],
                ["h", 1],
                ["i", 1],
                ["k", 1],
                ["n", 1],
                ["r", 1],
            ],
        ),
    ],
)
def test_char_count(test_string, result_list):
    assert char_count(test_string) == result_list
