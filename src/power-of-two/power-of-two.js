// Problem: Is given number a power of two?
// Time complexity: logarithmic O(log n)

const isPowerOfTwo = (num) => {
    if (num > 1 && num % 2 === 0) return isPowerOfTwo(num / 2);
    if (num < 1) return false;
    if (num === 1) return true;
    if (num % 2 !== 0) return false;
};

export default isPowerOfTwo;
