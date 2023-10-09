const palindrome = function (word) {
  if (typeof word == "number" && word !== null) {
    const num = word.toString();
    let num_reverse = "";
    for (let i = num.length - 1; i >= 0; i--) {
      num_reverse += num[i];
    }
    return num == num_reverse;
  }
  if (word.length == 0) {
    return true;
  }
  let new_string = "";
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let letter of word.toLowerCase()) {
    if (alphanumeric.indexOf(letter) !== -1) {
      new_string += letter;
    }
  }
  let reversed_string = "";
  for (let j = new_string.length - 1; j >= 0; j--) {
    reversed_string += new_string[j];
  }
  return reversed_string == new_string;
};

module.exports = { palindrome };
