def palindrome(argument):
    if type(argument) == int:
        return str(argument) == str(argument)[::-1]
    if len(argument) == 0:
        return True
    if type(argument) == str:
        if len(argument.split(" ")) == 1:
            return argument.lower() == argument.lower()[::-1]
        else:
            new_string = ""
            for letter in argument.lower():
                if letter.isalnum():
                    new_string += letter
            return new_string == new_string[::-1]

    return False
