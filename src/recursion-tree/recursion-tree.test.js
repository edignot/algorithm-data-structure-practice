import { getAnimalsTree } from "./recursion-tree";

describe("Recursion tree", () => {
    test("Recursion tree", () => {
        expect(
            getAnimalsTree(
                [
                    { id: "animals", parent: null },
                    { id: "mammals", parent: "animals" },
                    { id: "cats", parent: "mammals" },
                    { id: "dogs", parent: "mammals" },
                    { id: "persian", parent: "cats" },
                    { id: "siamese", parent: "cats" },
                    { id: "labrador", parent: "dog" },
                ],
                null
            )
        ).toStrictEqual({
            animals: {
                mammals: {
                    cats: {
                        persian: {},
                        siamese: {},
                    },
                    dogs: {},
                },
            },
        });
    });
        test("Recursion tree", () => {
            expect(
                getAnimalsTree(
                    [
                        { id: "animals", parent: null },
                        { id: "mammals", parent: "animals" },
                        { id: "cats", parent: "mammals" },
                        { id: "dogs", parent: "mammals" },
                        { id: "persian", parent: "cats" },
                        { id: "siamese", parent: "cats" },
                        { id: "labrador", parent: "dog" },
                    ],
                    null
                )
            ).toStrictEqual({
                animals: {
                    mammals: {
                        cats: {
                            persian: {},
                            siamese: {},
                        },
                        dogs: {},
                    },
                },
            });
        });
});
