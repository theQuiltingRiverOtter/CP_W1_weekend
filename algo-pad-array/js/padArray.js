// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value = null) => {
  if (minSize < array.length) {
    return array;
  }
  const newArray = [...array];
  const addSize = minSize - array.length;
  for (let i = 0; i < addSize; i++) {
    newArray.push(value);
  }
  return newArray;
};

exports.pad = pad;
