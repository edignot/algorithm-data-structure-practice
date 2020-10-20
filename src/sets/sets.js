// Set - a collection of values which forms an entity itself, most arrays are sets ( connected values )

// Set Algorithm Example: Cartesian Product Algorithm:
// Time complexity: O(n*m), if arrays are the same length O(n^2)
// Space complexity: O(n*m), if arrays are the same length O(n^2)
export const getCartesianProductsFor = (colors, sizes) => {
    const options = [];
    for (let c = 0; c < colors.length; c++) {
        for (let s = 0; s < sizes.length; s++) {
            options.push([colors[c], sizes[s]]);
        }
    }
    return options;
};

// Refactored with for of loop
export const getCartesianProductsForOf = (colors, sizes) => {
    const options = [];
    for (const c of colors) {
        if (Array.isArray(c)) {
            for (const s of sizes) {
                options.push([...c, s]);
            }
        } else {
            for (const s of sizes) {
                options.push([c, s]);
            }
        }
    }
    return options;
};

// Unlimited amount of sets:
export const getCartesianProductsUnlimitedSets = (...sets) => {
    let options = sets[0];
    for (let i = 1; i < sets.length; i++) {
        options = getCartesianProductsForOf(options, sets[i]);
    }
    return options;
};
