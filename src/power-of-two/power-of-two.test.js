import { isPowerOfTwo, isPowerOfTwoBitwise } from "./power-of-two";

describe("Is number a power of two", () => {
    test("Is 8 a power of two", () => {
        expect(isPowerOfTwo(8)).toBe(true);
    });
    test("Is 24 a power of two", () => {
        expect(isPowerOfTwo(24)).toBe(false);
    });
    test("Is 13 a power of two", () => {
        expect(isPowerOfTwo(13)).toBe(false);
    });
});

describe("Is number a power of two | Bitwise operator", () => {
    test("Is 8 a power of two", () => {
        expect(isPowerOfTwoBitwise(8)).toBe(true);
    });
    test("Is 24 a power of two", () => {
        expect(isPowerOfTwoBitwise(24)).toBe(false);
    });
    test("Is 13 a power of two", () => {
        expect(isPowerOfTwoBitwise(13)).toBe(false);
    });
});
