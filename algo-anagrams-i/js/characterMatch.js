const isCharacterMatch = function (string1, string2) {
  const string1_obj = {};
  for (let letter of string1.toLowerCase()) {
    if (letter !== " ") {
      string1_obj[letter] = string1_obj[letter] + 1 || 1;
    }
  }
  for (let letter of string2.toLowerCase()) {
    if (letter !== " ") {
      if (letter in string1_obj) {
        string1_obj[letter] -= 1;
      } else {
        return false;
      }
    }
  }
  for (let letter in string1_obj) {
    if (string1_obj[letter] > 0) {
      return false;
    }
  }
  return true;
};

const anagramsFor = function (word, listOfWords) {
  const anagrams = [];
  for (let wordFromList of listOfWords) {
    if (isCharacterMatch(word, wordFromList)) {
      anagrams.push(wordFromList);
    }
  }
  return anagrams;
};

module.exports = { isCharacterMatch, anagramsFor };
