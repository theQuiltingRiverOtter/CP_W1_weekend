const { findArmstrongNumbers } = require("./armstrongNumbers");

describe("Tests findArmstrongNumbers() with 0", () => {
  test("findArmstrongNumbers([0]).length == 1", () => {
    expect(findArmstrongNumbers([0])).toHaveLength(1);
  });
  test("findArmstrongNumbers([0]) to be instance of Array", () => {
    expect(findArmstrongNumbers([0])).toBeInstanceOf(Array);
  });
  test("findArmstrongNumbers([0]) to match [0]", () => {
    expect(findArmstrongNumbers([0])).toMatchObject([0]);
  });
});

describe("Tests findArmstrongNumbers() with 0-7", () => {
  const arrayOfNums = [...Array(8).keys()];
  test("findArmstrongNumbers(arrayOfNums).length == 8", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toHaveLength(8);
  });
  test("findArmstrongNumbers(arrayOfNums) to be instance of Array", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toBeInstanceOf(Array);
  });
  test("findArmstrongNumbers(arrayOfNums) to match [0,1,2,3,4,5,6,7]", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toMatchObject([
      0, 1, 2, 3, 4, 5, 6, 7,
    ]);
  });
});

describe("Tests findArmstrongNumbers() with 0-99", () => {
  const arrayOfNums = [...Array(99).keys()];
  test("findArmstrongNumbers(arrayOfNums).length == 10", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toHaveLength(10);
  });
  test("findArmstrongNumbers(arrayOfNums) to be instance of Array", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toBeInstanceOf(Array);
  });
  test("findArmstrongNumbers(arrayOfNums) to match [0,1,2,3,4,5,6,7,8,9]", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toMatchObject([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});

describe("Tests findArmstrongNumbers() with 0-998", () => {
  const arrayOfNums = [...Array(999).keys()];
  test("findArmstrongNumbers(arrayOfNums).length == 14", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toHaveLength(14);
  });
  test("findArmstrongNumbers(arrayOfNums) to be instance of Array", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toBeInstanceOf(Array);
  });
  test("findArmstrongNumbers(arrayOfNums) to match [0,1,2,3,4,5,6,7,8,9,153,370,371,407]", () => {
    expect(findArmstrongNumbers(arrayOfNums)).toMatchObject([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407,
    ]);
  });
});
