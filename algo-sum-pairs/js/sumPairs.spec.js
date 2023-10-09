const { sumPairs } = require("./sumPairs");

describe("Tests sumPairs() if unable to find pairs", () => {
  test("sumPairs([3, 1, 5, 8, 2], 27) to return 'unable to find pairs'", () => {
    expect(sumPairs([3, 1, 5, 8, 2], 27)).toBe("unable to find pairs");
  });
});

describe("Tests sumPairs() for one pair", () => {
  test("sumPairs([1,2,3,4,5], 9) to return [[4,5]]", () => {
    expect(sumPairs([1, 2, 3, 4, 5], 9)).toMatchArray([[4, 5]]);
  });
});

describe("Tests sumPairs() for two pair", () => {
  test("sumPairs([1,2,3,4,5], 7) to return [[2,5], [3,4]]", () => {
    expect(sumPairs([1, 2, 3, 4, 5], 7)).toMatchArray([
      [2, 5],
      [3, 4],
    ]);
  });
});
