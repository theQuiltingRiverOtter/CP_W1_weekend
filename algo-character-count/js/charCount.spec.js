const { charCount } = require("./charCount");

describe("Tests charCount for single words", () => {
  test("charCount('aaabbc') == [['a', 3], ['b',2], ['c',1]]", () => {
    expect(charCount("aaabbc")).toMatchArray([
      ["a", 3],
      ["b", 2],
      ["c", 1],
    ]);
  });
});

describe("Tests charCount for sentence", () => {
  test('charCount("an apple a day will keep the doctor away") == [["a", 6],["e", 4],["l", 3],["p", 3],["d", 2],["o", 2],["t", 2],["w", 2],["y", 2],["c", 1],["h", 1],["i", 1],["k", 1],["n", 1],["r", 1]]', () => {
    expect(charCount("an apple a day will keep the doctor away")).toMatchArray([
      ["a", 6],
      ["e", 4],
      ["l", 3],
      ["p", 3],
      ["d", 2],
      ["o", 2],
      ["t", 2],
      ["w", 2],
      ["y", 2],
      ["c", 1],
      ["h", 1],
      ["i", 1],
      ["k", 1],
      ["n", 1],
      ["r", 1],
    ]);
  });
});
