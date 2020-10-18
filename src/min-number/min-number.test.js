import getMinNum from "./min-number";

describe("Min number", () => {
    test("2nd element of fibonacci sequence", () => {
        expect(getMinNum([4, 6, 8, 2, 5, 4])).toBe(2);
    });
    test("7th element of fibonacci sequence", () => {
        expect(getMinNum([4, 5, 8])).toBe(4);
    });
});
