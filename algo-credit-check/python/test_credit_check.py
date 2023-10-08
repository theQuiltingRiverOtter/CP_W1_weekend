from credit_check import credit_check
import pytest

pytest.mark.parametrize(
    "valid_number", ["5541808923795240", "4024007136512380", "6011797668867828"]
)

pytest.mark.parametrize(
    "invalid_number", ["5541801923795240", "4024007106512380", "6011797668868728"]
)


def test_credit_check(valid_number):
    assert credit_check(valid_number)


def test_not_credit_check(invalid_number):
    assert not credit_check(invalid_number)
