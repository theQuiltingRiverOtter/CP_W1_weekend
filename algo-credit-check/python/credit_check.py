def add_digits(num):
    digits = str(num)
    total = 0
    for digit in digits:
        total += int(digit)
    return total


def credit_check(str):
    digits_reversed = [int(x) for x in str[::-1]]
    digits_after_doubling = [
        x * 2 if i % 2 != 0 else x for i, x in enumerate(digits_reversed)
    ]
    digits_after_adding = [
        add_digits(x) if x >= 10 else x for x in digits_after_doubling
    ]
    if sum(digits_after_adding) % 10 == 0:
        print("The number is valid!")
        return True
    else:
        print("The number is invalid!")
        return False


# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"
