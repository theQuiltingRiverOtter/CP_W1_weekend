// How can you make this more scalable and reusable later?
const isArmstrongNumber = function (number) {
  if (number >= 0 && number < 10) {
    return true;
  }
  const digits = number.toString().split("").map(Number);
  let power = digits.length;
  let total = 0;
  for (let digit of digits) {
    total += digit ** power;
  }
  return total === number;
};

exports.findArmstrongNumbers = function (numbers) {
  const armstrongNumbers = [];
  for (let num of numbers) {
    if (isArmstrongNumber(num)) {
      armstrongNumbers.push(num);
    }
  }
  return armstrongNumbers;
};
