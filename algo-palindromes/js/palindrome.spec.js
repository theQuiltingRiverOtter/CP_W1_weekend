const { palindrome } = require("./palindrome.js");

describe("Tests palindrome() for numbers", () => {
  test("Test palindrome(434) to be true", () => {
    expect(palindrome(434)).toBeTruthy();
  });
  test("Test palindrome(136) to be fasle", () => {
    expect(palindrome(136)).toBeFalsy();
  });
});

describe("Tests palindrome for words", () => {
  test("Test palindrome('racecar') to be true", () => {
    expect(palindrome("racecar")).toBeTruthy();
  });
  test("Test palindrome('ciVic') to be true", () => {
    expect(palindrome("ciVic")).toBeTruthy();
  });
  test("Test palindrome('Noon') to be true", () => {
    expect(palindrome("Noon")).toBeTruthy();
  });
  test("Test palindrome('nice') to be fasle", () => {
    expect(palindrome("nice")).toBeFalsy();
  });
  test("Test palindrome('bomb') to be fasle", () => {
    expect(palindrome("bomb")).toBeFalsy();
  });
});

describe("Tests palindrome for sentences", () => {
  test("Test palindrome('Sore was I ere I saw Eros') to be true", () => {
    expect(palindrome("Sore was I ere I saw Eros")).toBeTruthy();
  });
  test("Test palindrome('A man, a plan, a canal -- Panama') to be true", () => {
    expect(palindrome("A man, a plan, a canal -- Panama")).toBeTruthy();
  });
});
