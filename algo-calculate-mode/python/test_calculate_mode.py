from calculate_mode import calculate_mode


def test_calculate_mode_integers():
    assert calculate_mode([1, 2, 3, 3]) == [3]


def test_calculate_mode_ints_and_floats():
    assert calculate_mode([4.5, 0, 0]) == [0]


def test_calculate_mode_negs_and_pos():
    assert calculate_mode([-1, -1, 1, 2]) == [-1]


def test_calculate_mode_multiple_modes():
    assert calculate_mode([1, 1, 2, 2]) == [1, 2]


def test_calculate_mode_all_unique():
    assert calculate_mode([1, 2, 3]) == [1, 2, 3]


def test_calculate_mode_array_of_strings():
    assert calculate_mode(["who", "what", "where", "who"]) == ["who"]
