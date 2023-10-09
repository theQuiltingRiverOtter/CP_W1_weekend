expect.extend({
  toMatchArray(received, expected) {
    if (!Array.isArray(expected)) {
      return {
        pass: false,
        message: () =>
          `Expected: ${received} to be an Array, Recieved is ${typeof received}`,
      };
    }
    if (received.length !== expected.length) {
      return {
        pass: false,
        message: () =>
          `Expected: ${received} ro have length of ${expected.length} but it has a length of ${received.length}`,
      };
    }
    return received.every((elem, ind) => elem == expected[ind]);
  },
});
