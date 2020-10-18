// Problem: Is given number a power of two?

// Time complexity: logarithmic O(log n)
export const isPowerOfTwo = (num) => {
    if (num > 1 && num % 2 === 0) return isPowerOfTwo(num / 2);
    if (num < 1) return false;
    if (num === 1) return true;
    if (num % 2 !== 0) return false;
};

// Utilizing bitwise operators
// Binary number: 128 64 32 16 8 4 2 1
// Converting number to binary number - using subtractions 75 -> 01001011
// Time complexity: O(1)
export const isPowerOfTwoBitwise = (num) => {
    return num & (num - 1) ? false : true;
};
