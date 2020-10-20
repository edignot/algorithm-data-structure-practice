// Problem: Return minimum amount fo coins that add up to a given amount of money
// Time complexity:

const getChange = (cents) => {
    const change = {};
    const coins = [100, 50, 20, 10, 5, 2, 1];
    coins.forEach((coin) => {
        if (cents >= coin) {
            const numOfCoins = Math.floor(cents / coin);
            change[coin] = numOfCoins;
            cents -= coin * numOfCoins;
        }
    });
    return change;
};

export default getChange;
