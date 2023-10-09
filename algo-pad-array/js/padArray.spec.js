const { pad } = require("./padArray");

describe("Tests pad() without a default pad value", () => {
  test("Test pad([1,2,3],5) to return [1,2,3,null,null]", () => {
    expect(pad([1, 2, 3], 5)).toMatchArray([1, 2, 3, null, null]);
  });
});
