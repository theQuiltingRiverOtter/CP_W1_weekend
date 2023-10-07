# Part 1
def is_character_match(string1, string2):
    string1_dict = {}
    for letter in string1.lower():
        string1_dict[letter] = string1_dict.get(letter, 0) + 1
    for letter in string2.lower():
        if letter not in string1_dict:
            return False
        else:
            string1_dict[letter] -= 1
    for letter in string1_dict:
        if string1_dict[letter] > 0:
            return False
    return True


# Part 2
def anagrams_for(word, list_of_words):
    anagrams = []
    for word_in_list in list_of_words:
        if is_character_match(word, word_in_list):
            anagrams.append(word_in_list)
    return anagrams
