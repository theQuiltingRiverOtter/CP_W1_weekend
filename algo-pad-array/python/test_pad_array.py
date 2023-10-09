from pad_array import pad


def test_pad():
    assert pad([1, 2, 3], 5) == [1, 2, 3, None, None]
