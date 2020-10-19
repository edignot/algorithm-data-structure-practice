// Problem: return a factorial number of a given positive integer

// Loop approach:
// Time complexity: O(n) - no new values are created, values only change with each loop
// Space complexity: O(1) - space occupied in the memory does not depend on the number
export const getFactorial = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

// Recursive approach:
// Time complexity: O(n)
// Space complexity: O(n)
export const getFactorialRecursion = (num) => {
    if (num > 1) {
        return num * getFactorialRecursion(num - 1);
    } else {
        return 1;
    }
};
