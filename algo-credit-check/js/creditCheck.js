const creditCheck = function (str) {
  const digits = str
    .split("")
    .reverse()
    .map(Number)
    .map((elem, ind) => {
      if (ind % 2 != 0) {
        return elem * 2;
      } else {
        return elem;
      }
    })
    .map((elem) => {
      if (elem >= 10) {
        return elem
          .toString()
          .split("")
          .map(Number)
          .reduce((a, b) => a + b);
      } else {
        return elem;
      }
    })
    .reduce((a, b) => a + b);
  return digits % 2 == 0;
};

console.log(creditCheck("5541801923795240"));
module.exports = { creditCheck };
