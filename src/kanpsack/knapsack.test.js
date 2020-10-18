import getBag from "./knapsack";

describe("Knapsack", () => {
    test("Knapsack one", () => {
        const items = [
            { id: "a", weight: 8, value: 7 },
            { id: "b", weight: 4, value: 5 },
            { id: "c", weight: 2, value: 3 },
            { id: "d", weight: 7, value: 5 },
        ];
        const maxWeight = 11;
        const result = {
            items: [
                { id: "c", value: 3, weight: 2 },
                { id: "d", value: 5, weight: 7 },
            ],
            value: 8,
            weight: 9,
        };
        expect(getBag(items, maxWeight, items.length - 1)).toStrictEqual(
            result
        );
    });
});
