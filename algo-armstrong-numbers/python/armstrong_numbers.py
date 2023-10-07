# How can you make this more scalable and reusable later?
def is_armstrong_number(num):
    if num < 10:
        return True
    digits = [int(n) for n in str(num)]
    power = len(digits)
    total = 0
    for d in digits:
        total += d**power
    return total == num


def find_armstrong_numbers(numbers):
    armstrong_numbers = []
    for num in numbers:
        if is_armstrong_number(num):
            armstrong_numbers.append(num)
    return armstrong_numbers
