const { default: expect } = require("expect");
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

describe("Tests calculateMode for numbers with multiple returns", () => {
  test("calculateMode() to return [1,2]", () => {
    expect(calculateMode([1, 1, 2, 2])).toMatchArray([1, 2]);
  });

  test("calculateMode([8, 5, 3, 1, 2, 8, 5, 3, 9, 12, 14, 8, 5, 3, 32, 42, 52, 8, 5, 3, 101, 0, -1]) to return [8,5,3]", () => {
    expect(
      calculateMode([
        8, 5, 3, 1, 2, 8, 5, 3, 9, 12, 14, 8, 5, 3, 32, 42, 52, 8, 5, 3, 101, 0,
        -1,
      ])
    ).toMatchArray([8, 5, 3]);
  });
  test("calculateMode([1, 2, 3]) to return [1, 2, 3]", () => {
    expect(calculateMode([1, 2, 3])).toMatchArray([1, 2, 3]);
  });
  test("calculateMode([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0, 10, 12, 100, 200]) to return [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0, 10, 12, 100, 200]", () => {
    expect(
      calculateMode([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0, 10, 12, 100, 200])
    ).toMatchArray([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 0, 10, 12, 100, 200]);
  });
});

describe("Tests calculateMode for strings", () => {
  test("calculateMode(['who', 'what, 'where', 'who']) to return ['who']", () => {
    expect(calculateMode(["who", "what", "where", "who"])).toMatchArray([
      "who",
    ]);
  });

  test('calculateMode(["Sam", "Owen", "Megan", "Sam", "Martin", "Sam", "Owen"]) == ["Sam"]', () => {
    expect(
      calculateMode(["Sam", "Owen", "Megan", "Sam", "Martin", "Sam", "Owen"])
    ).toMatchArray(["Sam"]);
  });
});

describe("Tests calculateMode for strings with multiple returns", () => {
  test("calculateMode(['who','what','when','where','why','how','who','what','who','what','how']", () => {
    expect(
      calculateMode([
        "who",
        "what",
        "when",
        "where",
        "why",
        "how",
        "who",
        "what",
        "who",
        "what",
        "how",
      ])
    ).toMatchArray(["who", "what"]);
  });
});
