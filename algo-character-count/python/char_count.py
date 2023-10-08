def char_count(str):
    char_count_dict = {}
    for letter in str.lower():
        if letter.isalnum():
            char_count_dict[letter] = char_count_dict.get(letter, 0) + 1
    char_count_list = [[item, char_count_dict[item]] for item in char_count_dict]
    char_count_list.sort(key=lambda elem: (-elem[1], elem[0]))
    return char_count_list
