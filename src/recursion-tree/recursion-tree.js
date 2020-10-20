// Recursion - function that calls itself until it doesn't

// Make relation tree:
export const getAnimalsTree = (categories, parent) => {
    let node = {};
    categories
        .filter((c) => c.parent === parent)
        .forEach((c) => (node[c.id] = getAnimalsTree(categories, c.id)));
    return node;
};
