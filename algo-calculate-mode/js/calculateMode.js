const calculateMode = (list) => {
  const mode = [];
  let max_count = 0;
  const element_counts = {};
  list.forEach(
    (elem) => (element_counts[elem] = element_counts[elem] + 1 || 1)
  );
  for (let elem in element_counts) {
    if (element_counts[elem] > max_count) {
      max_count = element_counts[elem];
    }
  }
  for (let elem in element_counts) {
    if (element_counts[elem] === max_count) {
      mode.push(elem);
    }
  }
  return mode.map((elem) => {
    if (isNaN(Number(elem))) {
      return elem;
    } else {
      return Number(elem);
    }
  });
};

module.exports = { calculateMode };
