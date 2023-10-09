expect.extend({
  toDeeplyMatchArray(received, expected) {
    if (!Array.isArray(received)) {
      return {
        pass: false,
        message: () =>
          `Expected ${received} to be an Array instead of ${typeof received}`,
      };
    }
    if (received.length !== expected.length) {
      return {
        pass: false,
        message: () =>
          `Expected ${received} to have a length of ${expected.length}, instead it has a length of ${received.length}`,
      };
    }
    for (let i = 0; i < received.length; i++) {
      if (typeof received[i] !== typeof expected[i]) {
        return {
          pass: false,
          message: () =>
            `Expected ${received[i]} to be ${typeof expected[
              i
            ]} instead of ${typeof received[i]}`,
        };
      }
      if (Array.isArray(received[i]) && Array.isArray(expected[i])) {
        if (received[i].length !== expected[i].length) {
          return {
            pass: false,
            message: () =>
              `Expected ${received[i]} to have length of ${expected[i].length} instead of ${received[i].length}`,
          };
        }
        if (!received[i].every((elem, ind) => elem == expected[i][ind])) {
          return {
            pass: false,
            message: () => `Expected ${elem} to equal ${expected[i][ind]}`,
          };
        } else {
          return {
            pass: true,
            message: () =>
              `Expected ${received[i]} to not match ${expected[i]}`,
          };
        }
      }
      if (typeof received[i] === "object" && received[i] !== null) {
        const receivedKeys = Object.keys(received[i]);
        const expectedKeys = Object.keys(expected[i]);
        if (receivedKeys.length !== expectedKeys.length) {
          return {
            pass: false,
            message: () =>
              `Expected ${received[i].length} to have length of ${expected[i].length} instead of ${received[i].length}`,
          };
        }
        for (let key of receivedKeys) {
          if (received[i][key] !== expected[i][key]) {
            return {
              pass: false,
              message: () =>
                `Expected ${received[i][key]} to match ${expected[i][key]}`,
            };
          }
        }
        return {
          pass: true,
          message: () => `Expected ${received[i]} to not match ${expected[i]}`,
        };
      } else {
        return {
          pass: true,
          message: () => `Expected ${received[i]} to not match ${expected[i]}`,
        };
      }
    }
  },
});

expect.extend({
  toMatchArray(received, expected) {
    if (!Array.isArray(received)) {
      return {
        pass: false,
        message: () =>
          `Expected: ${received} to be an Array instead of ${typeof received}`,
      };
    }
    if (received.length !== expected.length) {
      return {
        pass: false,
        message: () =>
          `Expected: ${received} to have length of ${expected.length} but it has a length of ${received.length}`,
      };
    }
    if (received.every((elem, ind) => elem == expected[ind])) {
      return {
        pass: true,
        message: () => `Expected ${received} to not match ${expected}`,
      };
    } else {
      return {
        pass: false,
        message: () => `Expected ${received} to match ${expected}`,
      };
    }
  },
});
