import { getFactorial, getFactorialRecursion } from "./factorial";

describe("Factorial number", () => {
    test("Return factorial of 3", () => {
        expect(getFactorial(3)).toBe(6);
    });
    test("Return factorial of 6", () => {
        expect(getFactorial(6)).toBe(720);
    });
});

describe("Factorial number | Recursive approach", () => {
    test("Return factorial of 3", () => {
        expect(getFactorialRecursion(3)).toBe(6);
    });
    test("Return factorial of 6", () => {
        expect(getFactorialRecursion(6)).toBe(720);
    });
});
