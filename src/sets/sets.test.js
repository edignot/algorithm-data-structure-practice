import { getCartesianProducts } from "./sets";

describe("Cartesian Product", () => {
    test("Cartesian Product", () => {
        expect(
            getCartesianProducts(["blue", "red"], ["S", "M", "L"])
        ).toStrictEqual([
            ["blue", "S"],
            ["blue", "M"],
            ["blue", "L"],
            ["red", "S"],
            ["red", "M"],
            ["red", "L"],
        ]);
    });
    test("Cartesian Product", () => {
        expect(
            getCartesianProducts(["blue", "red", "white"], ["S", "M", "L"])
        ).toStrictEqual([
            ["blue", "S"],
            ["blue", "M"],
            ["blue", "L"],
            ["red", "S"],
            ["red", "M"],
            ["red", "L"],
            ["white", "S"],
            ["white", "M"],
            ["white", "L"],
        ]);
    });
});
