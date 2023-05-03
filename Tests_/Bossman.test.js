const BossMan = require("../lib/Bossman");

  test("getRole() returns BossMan option", () => {
    const testRole = "BossMan";
    const newRole = new BossMan("Test", 505, "example@test.com", testRole);
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getOfficeNumber()", () => {
    const testOfficeNum = 147;
    const newOfficeNum = new BossMan("Test", 505, "example@test.com", testOfficeNum);
    expect(newOfficeNum.getOfficeNumber()).toBe(testOfficeNum);
  });