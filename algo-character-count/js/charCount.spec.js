const { charCount } = require("./charCount");

describe("Tests charCount for single words", () => {
  test("charCount('aaabbc') == [['a', 3], ['b',2], ['c',1]]", () => {
    expect(charCount("aaabbc")).toBe([
      ["a", 3],
      ["b", 2],
      ["c", 1],
    ]);
  });
});
