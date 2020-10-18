import { isNumberPrime, isNumberPrimeMath } from "./primal-numbers";

describe("Is number prime", () => {
    test("Is 4 prime number", () => {
        expect(isNumberPrime(4)).toBe(false);
    });
    test("Is 17 prime number", () => {
        expect(isNumberPrime(17)).toBe(true);
    });
    test("Is 97 prime number", () => {
        expect(isNumberPrime(97)).toBe(true);
    });
});

describe("Is number prime Math", () => {
    test("Is 9 prime number", () => {
        expect(isNumberPrimeMath(9)).toBe(false);
    });
    test("Is 17 prime number", () => {
        expect(isNumberPrimeMath(17)).toBe(true);
    });
    test("Is 97 prime number", () => {
        expect(isNumberPrimeMath(97)).toBe(true);
    });
});
