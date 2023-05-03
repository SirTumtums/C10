const Newbie = require("../lib/Newbie");

  test("getRole() returns Newbie option", () => {
    const testRole =  "Newbie";
    const newRole = new Newbie("Test", 505, "example@test.com", "University of School");
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getSchool()", () => {
    const testSchool = "University of School";
    const newSchool = new Newbie("Test", 505, "example@test.com", testSchool);
    expect(newSchool.getSchool()).toBe(testSchool);
  });