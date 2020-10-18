import getFibonacciEl from "./fibonacci-sequence";

describe("Fibonacci sequence", () => {
    test("2nd element of fibonacci sequence", () => {
        expect(getFibonacciEl(2)).toBe(2);
    });
    test("7th element of fibonacci sequence", () => {
        expect(getFibonacciEl(7)).toBe(21);
    });
    test("12th element of fibonacci sequence", () => {
        expect(getFibonacciEl(12)).toBe(233);
    });
});
