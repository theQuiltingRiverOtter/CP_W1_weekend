const exp = require("constants");

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
    expected.sort();
    if (!received.sort().every((val, index) => val === expected[index])) {
      return {
        pass: false,
        message: () => `Expected ${received} to match ${expected}`,
      };
    }
    return {
      pass: true,
      message: () => `Expected ${received} not to match ${expected}`,
    };
  },
});
