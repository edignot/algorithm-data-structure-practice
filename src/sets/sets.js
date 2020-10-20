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
// Time complexity: Assuming that all arrays have the same length O(n^x)
// Space complexity: Assuming that all arrays have the same length O(n^x)
export const getCartesianProductsUnlimitedSets = (...sets) => {
    let options = sets[0];
    for (let i = 1; i < sets.length; i++) {
        options = getCartesianProductsForOf(options, sets[i]);
    }
    return options;
};

// Permutations algorithm - ordered combinations of values, can be without or with repetition
// All possible combination of items with or without repetition
// One extra loop per extra element inside input array
// Time complexity: Factorial O(n!) ( 4 * 3 * 2 * 1 => 24; 5 * 4 * 3 * 2 * 1 => 120)
export const getAllPermutations = (options) => {
    const possibleOptions = [];
    if (options.length === 1) {
        return [options];
    }
    const partialOptions = getAllPermutations(options.slice(1));

    const firstOption = options[0];

    for (let i = 0; i < partialOptions.length; i++) {
        const partialOption = partialOptions[i];
        for (let x = 0; x <= partialOptions.length; x++) {
            const optionInFront = partialOption.slice(0, x);
            const optionAfter = partialOption.slice(x);
            possibleOptions.push(
                optionInFront.concat([firstOption], optionAfter)
            );
        }
    }
    return possibleOptions;
};

// Permutation algorithm with repetitive values
// Time complexity: O(n^m) Depend on two input factors, grows faster than exponential O(n!)
export const getAllPermutationsWithRepetition = (
    options,
    combinationLength
) => {
    const possibleOptions = [];
    if (combinationLength === 1) return options.map((option) => [option]);
    const partialOption = getAllPermutationsWithRepetition(
        options,
        combinationLength - 1
    );

    for (const option of options) {
        for (const existingOption of partialOption) {
            possibleOptions.push([option].concat(existingOption));
        }
    }
    return possibleOptions;
};

