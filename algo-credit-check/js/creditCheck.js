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
  if (digits % 10 == 0) {
    console.log("The number is valid!");
    return true;
  } else {
    console.log("The number is invalid!");
    return false;
  }
};

console.log(creditCheck("4024007106512380"));
module.exports = { creditCheck };
