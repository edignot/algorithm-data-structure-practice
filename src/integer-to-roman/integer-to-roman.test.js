import integerToRoman from "./integer-to-roman";

describe("Integer to Roman number", () => {
    test("Integer to Roman number", () => {
        expect(integerToRoman(126)).toBe("CXXVI");
    });
    test("Integer to Roman number", () => {
        expect(integerToRoman(234)).toBe("CCXXXIV");
    });
    test("Integer to Roman number", () => {
        expect(integerToRoman(0)).toBe("");
    });
});
