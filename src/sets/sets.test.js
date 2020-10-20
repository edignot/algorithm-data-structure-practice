import {
    getCartesianProductsForOf,
    getCartesianProductsUnlimitedSets,
    getAllPermutations,
} from "./sets";

describe("Cartesian Product", () => {
    test("Cartesian Product", () => {
        expect(
            getCartesianProductsForOf(["blue", "red"], ["S", "M", "L"])
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
            getCartesianProductsForOf(["blue", "red", "white"], ["S", "M", "L"])
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

describe("Cartesian Product | Any amount of sets", () => {
    test("Cartesian Product | Any amount of sets", () => {
        expect(
            getCartesianProductsUnlimitedSets(
                ["blue", "red"],
                ["S", "M", "L"],
                ["print", "no print"]
            )
        ).toStrictEqual([
            ["blue", "S", "print"],
            ["blue", "S", "no print"],
            ["blue", "M", "print"],
            ["blue", "M", "no print"],
            ["blue", "L", "print"],
            ["blue", "L", "no print"],
            ["red", "S", "print"],
            ["red", "S", "no print"],
            ["red", "M", "print"],
            ["red", "M", "no print"],
            ["red", "L", "print"],
            ["red", "L", "no print"],
        ]);
    });
});

describe("Permutations", () => {
    test("Get All Permutations", () => {
        expect(getAllPermutations(["a", "b", "c"])).toStrictEqual([
            ["a", "b", "c"],
            ["b", "a", "c"],
            ["b", "c", "a"],
            ["a", "c", "b"],
            ["c", "a", "b"],
            ["c", "b", "a"],
        ]);
    });
});
