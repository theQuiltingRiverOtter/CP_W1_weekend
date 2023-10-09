from pad_array import pad
import pytest


@pytest.mark.parametrize(
    "recieved_list, min_size, expected",
    [
        ([1, 2, 3], 5, [1, 2, 3, None, None]),
        ([1, 2, 3], 3, [1, 2, 3]),
        ([5, 8, 0, 10], 0, [5, 8, 0, 10]),
        ([5, 2, 3, 4], -1, [5, 2, 3, 4]),
    ],
)
def test_pad_without_default(recieved_list, min_size, expected):
    assert pad(recieved_list, min_size) == expected


@pytest.mark.parametrize(
    "recieved_list, min_size, pad_value, expected",
    [
        ([1, 2, 3], 5, "apple", [1, 2, 3, "apple", "apple"]),
        ([5, 8, 0, 10], 10, 2, [5, 8, 0, 10, 2, 2, 2, 2, 2, 2]),
        (
            ["hi", "bye", "there", "here", "where"],
            8,
            "which",
            ["hi", "bye", "there", "here", "where", "which", "which", "which"],
        ),
        ([53, 32, 5], -100, "hullabaloo", [53, 32, 5]),
    ],
)
def test_pad(recieved_list, min_size, pad_value, expected):
    assert pad(recieved_list, min_size, pad_value) == expected
