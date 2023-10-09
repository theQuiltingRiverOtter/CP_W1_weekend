const sumPairs = function (inputArray, targetValue) {
  const sumPairDict = {};
  for (let value of inputArray) {
    if (targetValue - value in sumPairDict) {
      sumPairDict[targetValue - value] = value;
    } else {
      sumPairDict[value] = undefined;
    }
  }
  const sumPairList = [];
  for (let value in sumPairDict) {
    if (sumPairDict[value] != undefined) {
      sumPairList.push([Number(value), sumPairDict[value]]);
    }
  }
  if (sumPairList.length !== 0) {
    return sumPairList;
  }
  return "unable to find pairs";
};

module.exports = { sumPairs };
