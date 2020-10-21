import isValidParentheses from "./valid-parentheses";

describe("Is input valid parenthesis", () => {
    test("Is input valid parenthesis", () => {
        expect(isValidParentheses("{}[]()")).toBe(true);
    });
    test("Is input valid parenthesis", () => {
        expect(isValidParentheses("[[{()}]]")).toBe(true);
    });
    test("Is input valid parenthesis", () => {
        expect(isValidParentheses("[[{({})")).toBe(false);
    });
    test("Is input valid parenthesis", () => {
        expect(isValidParentheses("[][]{}({})")).toBe(true);
    });
    test("Is input valid parenthesis", () => {
        expect(isValidParentheses("{something}")).toBe(false);
    });
});
