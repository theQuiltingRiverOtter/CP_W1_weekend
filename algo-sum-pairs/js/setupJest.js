expect.extend({
  toMatchArray(received, expected) {
    if (received.length !== expected.length) {
      return {
        pass: false,
        message: () =>
          `Expected ${received} to have length of ${expected.length}`,
      };
    }
    if (!received instanceof Array) {
      return {
        pass: false,
        message: () => `Expected ${received} to be an instance of Array`,
      };
    }
    for (let i = 0; i < received.length; i++) {
      if (!received[i].every((val, index) => val === expected[i][index])) {
        return {
          pass: false,
          message: () => `Expected ${received[i]} to match ${expected[i]}`,
        };
      }
    }
    return {
      pass: true,
      message: () => `Expected ${received} not to match ${expected}`,
    };
  },
});
