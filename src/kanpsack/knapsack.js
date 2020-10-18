// Problem: Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible
// Time complexity:

const items = [
    { id: "a", weight: 8, value: 7 },
    { id: "b", weight: 4, value: 5 },
    { id: "c", weight: 2, value: 3 },
    { id: "d", weight: 7, value: 5 },
];
const maxWeight = 11;

const getBag = (items, maxWeight, itemIndex) => {
    if (maxWeight === 0 || itemIndex < 0) {
        return {
            items: [],
            value: 0,
            weight: 0,
        };
    }

    if (maxWeight < items[itemIndex].weight) {
        return getBag(items, maxWeight, itemIndex - 1);
    }

    const bagWithItem =
        itemIndex &&
        getBag(items, maxWeight - items[itemIndex].weight, itemIndex - 1);

    const bagWithoutItem =
        itemIndex &&
        getBag(items, maxWeight - items[itemIndex].weight, itemIndex - 1);

    const valueWithItem = bagWithItem.value + items[itemIndex].value;

    const valueWithoutItem = bagWithoutItem.value;

    if (valueWithItem > valueWithoutItem) {
        const updatedBag = {
            items: bagWithItem.items.concat(items[itemIndex]),
            value: (bagWithItem.value += items[itemIndex].value),
            weight: (bagWithItem.weight += items[itemIndex].weight),
        };
        return updatedBag;
    } else {
        return bagWithoutItem;
    }
};

export default getBag;
