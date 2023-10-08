from calculate_mode import calculate_mode


def test_calculate_mode_integers():
    assert calculate_mode([1, 2, 3, 3]) == [3]
    assert calculate_mode(
        [8, 2, 3, 5, 8, 2, 1, 10, 222, 32, 8, 2, 22, 32, 8, 58, 5, 8, 10, 3265, 1, 8]
    ) == [8]


def test_calculate_mode_ints_and_floats():
    assert calculate_mode([4.5, 0, 0]) == [0]
    assert calculate_mode(
        [2.0, 3, 5.5, 1.2, 5.5, 3, 5.5, 2.25, 1, 8, 5.5, 9, 1, 5.5, 2.0, 8.25]
    ) == [5.5]


def test_calculate_mode_negs_and_pos():
    assert calculate_mode([-1, -1, 1, 2]) == [-1]
    assert calculate_mode(
        [-8, 1, -8, 5, -8, 3, -2, 4, -8, 5, 8, 2, -8, 10, -12, 2, -8, 32, 4]
    ) == [-8]


def test_calculate_mode_multiple_modes():
    assert calculate_mode([1, 1, 2, 2]) == [1, 2]
    assert calculate_mode(
        [8, 5, 3, 1, 2, 8, 5, 3, 9, 12, 14, 8, 5, 3, 32, 42, 52, 8, 5, 3, 101, 0, -1]
    ) == [8, 5, 3]


def test_calculate_mode_all_unique():
    assert calculate_mode([1, 2, 3]) == [1, 2, 3]
    assert calculate_mode([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0, 10, 12, 100, 200]) == [
        1,
        2,
        3,
        4,
        5,
        -1,
        -2,
        -3,
        -4,
        -5,
        0,
        10,
        12,
        100,
        200,
    ]


def test_calculate_mode_array_of_strings():
    assert calculate_mode(["who", "what", "where", "who"]) == ["who"]
    assert calculate_mode(["Sam", "Owen", "Megan", "Sam", "Martin", "Sam", "Owen"]) == [
        "Sam"
    ]


def test_calculate_mode_strings_multiple():
    assert calculate_mode(
        [
            "who",
            "what",
            "when",
            "where",
            "why",
            "how",
            "who",
            "what",
            "who",
            "what",
            "how",
        ]
    ) == ["who", "what"]
