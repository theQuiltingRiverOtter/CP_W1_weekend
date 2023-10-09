const { pad } = require("./padArray");

describe("Tests pad() without a default pad value", () => {
  test("Test pad([1,2,3],5) to return [1,2,3,null,null]", () => {
    expect(pad([1, 2, 3], 5)).toMatchArray([1, 2, 3, null, null]);
  });
  test("Test pad([5,10,'hi','no',true],10) to return [5,10,'hi','no',true,null,null,null,null,null]", () => {
    expect(pad([5, 10, "hi", "no", true], 10)).toMatchArray([
      5,
      10,
      "hi",
      "no",
      true,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
});

describe("Tests pad() without a default pad value and a min size smaller than the array passed in", () => {
  test("Test pad([1,2,3,4,5],3) to return [1,2,3,4,5]", () => {
    expect(pad([1, 2, 3, 4, 5], 3)).toMatchArray([1, 2, 3, 4, 5]);
  });
  test("Test pad([32,5,16,'hello',null],0) to return [32,5,16,'hello',null]", () => {
    expect(pad([32, 5, 16, "hello", null], 0)).toMatchArray([
      32,
      5,
      16,
      "hello",
      null,
    ]);
  });
  test("Test pad([15,6,7],-10) to return [15,6,7]", () => {
    expect(pad([15, 6, 7], -10)).toMatchArray([15, 6, 7]);
  });
});

describe("Tests pad() for a pased in value", () => {
  test("Test pad([1,2,3],5,'apple') to return [1,2,3,'apple','apple']", () => {
    expect(pad([1, 2, 3], 5, "apple")).toMatchArray([
      1,
      2,
      3,
      "apple",
      "apple",
    ]);
  });
});
