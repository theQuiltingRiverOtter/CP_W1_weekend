const { calculateMode } = require("./calculateMode");

describe("Tests calculateMode for numbers", () => {
  expect(calculateMode([1, 2, 3, 3])).toBe([3]);
});
