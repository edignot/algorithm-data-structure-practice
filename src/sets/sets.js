// Set - a collection of values which forms an entity itself, most arrays are sets ( connected values )

// Set Algorithm Example: Cartesian Product Algorithm:
export const getCartesianProducts = (colors, sizes) => {
    const options = [];
    for (let c = 0; c < colors.length; c++) {
        for (let s = 0; s < sizes.length; s++) {
            options.push([colors[c], sizes[s]]);
        }
    }
    return options;
};
