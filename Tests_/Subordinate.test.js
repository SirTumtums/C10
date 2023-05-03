const Subordinate = require("../lib/subordinate");

  test("getRole() returns Subordinate option", () => {
    const testRole = "Subordinate";
    const newRole = new Subordinate(testRole);
    expect(newRole.getRole()).toBe(testRole);
  });
// Able to get the input info from constructor method
  test("Can use getName()", () => {
    const testName = "Betty";
    const newName = new Subordinate(testName);
    expect(newName.getName()).toBe(testName);
  });

  test("Can use getId()", () => {
    const testID = 85;
    const newID = new Subordinate("test", testID);
    expect(newID.getId()).toBe(testID);
  });
  
  test("Can use getEmail()", () => {
    const testEmail = "example@test.com";
    const newEmail = new Subordinate("test", 505, testEmail);
    expect(newEmail.getEmail()).toBe(testEmail);
  });