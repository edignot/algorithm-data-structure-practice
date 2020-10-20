import getChange from "./change-making";

describe("Get change", () => {
    test("Get change", () => {
        expect(getChange(5)).toStrictEqual({ 5: 1 });
    });
    test("Get change", () => {
        expect(getChange(123)).toStrictEqual({ 1: 1, 100: 1, 2: 1, 20: 1 });
    });
    test("Get change", () => {
        expect(getChange(17)).toStrictEqual({ 10: 1, 2: 1, 5: 1 });
    });
});
