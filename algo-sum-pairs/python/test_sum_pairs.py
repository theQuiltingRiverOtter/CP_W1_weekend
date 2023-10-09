from sum_pairs import sum_pairs
import pytest


@pytest.mark.parametrize(
    "input_array, target_value, expected",
    [([1, 2, 3, 4, 5], 9, [[4, 5]]), ([1, 2, 3, 4, 5], 7, [[2, 5], [3, 4]])],
)
def test_sum_pairs_found(input_array, target_value, expected):
    assert sum_pairs(input_array, target_value) == expected


def test_sum_pairs_not_found():
    assert sum_pairs([3, 1, 5, 8, 2], 27) == "unable to find pairs"
