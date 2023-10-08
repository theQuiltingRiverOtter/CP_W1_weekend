const { creditCheck } = require("./creditCheck");

describe("Tests creditCheck() to see if input number is valid credit card number", () => {
  test('creditCheck("5541808923795240") is valid number', () => {
    expect(creditCheck("5541808923795240")).toBeTruthy();
  });
});
