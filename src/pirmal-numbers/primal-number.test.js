import isNumberPrime from "./primal-numbers";

describe("Is 4 prime", () => {
    test("2nd element of fibonacci sequence", () => {
        expect(isNumberPrime(4)).toBe(false);
    });
    test("2nd element of fibonacci sequence", () => {
        expect(isNumberPrime(17)).toBe(true);
    });
    test("2nd element of fibonacci sequence", () => {
        expect(isNumberPrime(97)).toBe(true);
    });
});
