const { creditCheck } = require("./creditCheck");

describe("Tests creditCheck() for valid credit card number", () => {
  beforeEach(() => {
    return (consoleSpy = jest.spyOn(global.console, "log"));
  });
  afterEach(() => {
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith("The number is valid!");
    expect(consoleSpy.mock.calls).toContainEqual(["The number is valid!"]);
    consoleSpy.mockRestore();
  });
  test('creditCheck("5541808923795240") is valid number', () => {
    expect(creditCheck("5541808923795240")).toBeTruthy();
  });
  test('creditCheck("4024007136512380") is valid number', () => {
    expect(creditCheck("4024007136512380")).toBeTruthy();
  });
  test('creditCheck("6011797668867828") is valid number', () => {
    expect(creditCheck("6011797668867828")).toBeTruthy();
  });
});

describe("Tests creditCheck() for invalid credit card number", () => {
  beforeEach(() => {
    return (consoleSpy = jest.spyOn(global.console, "log"));
  });
  afterEach(() => {
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith("The number is invalid!");
    expect(consoleSpy.mock.calls).toContainEqual(["The number is invalid!"]);
    consoleSpy.mockRestore();
  });
  test('creditCheck("5541801923795240") is invalid number', () => {
    expect(creditCheck("5541801923795240")).toBeFalsy();
  });
  test('creditCheck("4024007106512380") is invalid number', () => {
    expect(creditCheck("4024007106512380")).toBeFalsy();
  });
  test('creditCheck("6011797668868728") is invalid number', () => {
    expect(creditCheck("6011797668868728")).toBeFalsy();
  });
});
