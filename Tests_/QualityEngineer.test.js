const QualityEngineer = require("../lib/QualityEngineer");
const Subordinate = require("../lib/subordinate");

  test("getRole() returns QualityEngineer option", () => {
    const testRole = "QualityEngineer";
    const newRole = new QualityEngineer("Test", 505, "example@test.com", testRole);
    expect(newRole.getRole()).toBe(testRole);
  });

  test("Can use getGithub()", () => {
    const testGithub = "GitHub user";
    const newGithub = new QualityEngineer("Test", 505, "example@test.com", testGithub);
    expect(newGithub.getGithub()).toBe(testGithub);
  });