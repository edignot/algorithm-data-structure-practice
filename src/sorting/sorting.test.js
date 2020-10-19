import { bubbleSort, quickSort, mergeSort } from "./sorting";

describe("Bubble sort", () => {
    test("Bubble sort", () => {
        expect(bubbleSort([4, -5, -4, 1, 7])).toStrictEqual([-5, -4, 1, 4, 7]);
    });
    test("BUbble sort", () => {
        expect(bubbleSort([4, 2, 6, 4, 3])).toStrictEqual([2, 3, 4, 4, 6]);
    });
});

describe("Quick sort", () => {
    test("Quick sort", () => {
        expect(quickSort([4, -5, -4, 1, 7])).toStrictEqual([-5, -4, 1, 4, 7]);
    });
    test("Quick sort", () => {
        expect(quickSort([4, 2, 6, 4, 3])).toStrictEqual([2, 3, 4, 4, 6]);
    });
});

describe("Merge sort", () => {
    test("Merge sort", () => {
        expect(mergeSort([4, -5, -4, 1, 7])).toStrictEqual([-5, -4, 1, 4, 7]);
    });
    test("Merge sort", () => {
        expect(mergeSort([4, 2, 6, 4, 3])).toStrictEqual([2, 3, 4, 4, 6]);
    });
});
