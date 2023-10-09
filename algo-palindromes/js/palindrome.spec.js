const { palindrome } = require("./palindrome");

describe("Tests palindrome() for numbers", () => {
  test("Test palindrome(434) to be true", () => {
    expect(palindrome(434)).toBeTruthy();
  });
});
