function compareElems(a, b) {
  if (a[1] > b[1]) {
    return -1;
  } else if (a[1] < b[1]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  } else if (a[0] > b[0]) {
    return 1;
  }
  return 0;
}
const charCount = function (string) {
  const charCountDict = {};
  const charCountArr = [];
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let letter of string.toLowerCase()) {
    if (alphanumeric.indexOf(letter) !== -1) {
      charCountDict[letter] = charCountDict[letter] + 1 || 1;
    }
  }
  for (let item in charCountDict) {
    charCountArr.push([item, charCountDict[item]]);
  }
  charCountArr.sort(compareElems);
  return charCountArr;
};

module.exports = { charCount };
