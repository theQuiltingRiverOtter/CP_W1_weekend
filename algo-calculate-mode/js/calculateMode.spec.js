const { calculateMode } = require("./calculateMode");

describe("Tests calculateMode for numbers", () => {
  test("calculateMode([1,2,3,3] to return [3]", () => {
    expect(calculateMode([1, 2, 3, 3])).toMatchArray([3]);
  });

  test("calculateMode([1.5,2,3,1.5,1.25,3.1,1.5,7.25,4]) to return [1.5]", () => {
    expect(
      calculateMode([1.5, 2, 3, 1.5, 1.25, 3.1, 1.5, 7.25, 4])
    ).toMatchArray([1.5]);
  });

  test("calculateMode([-8,2,5,-8,1,0,-2,-1,-8,4,3,10,-7,-5,-8]) to return [-8]", () => {
    expect(
      calculateMode([-8, 2, 5, -8, 1, 0, -2, -1, -8, 4, 3, 10, -7, -5, -8])
    ).toMatchArray([-8]);
  });
});

describe("Tests calculateMode for strings", () => {
  test("calculateMode(['who', 'what, 'where', 'who']) to return ['who']", () => {
    expect(calculateMode(["who", "what", "where", "who"])).toMatchArray([
      "who",
    ]);
  });
});
