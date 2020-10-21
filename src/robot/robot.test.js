import checkRobotLocation from "./robot";

describe("Check if robot comes back to the original location", () => {
    test("Check if robot comes back to the original location", () => {
        expect(checkRobotLocation("GRGRGRG")).toBe(true);
    });
    test("Check if robot comes back to the original location", () => {
        expect(checkRobotLocation("GRGLGLGLGG")).toBe(true);
    });
    test("Check if robot comes back to the original location", () => {
        expect(checkRobotLocation("GRGLGGGLGLGG")).toBe(false);
    });
});
