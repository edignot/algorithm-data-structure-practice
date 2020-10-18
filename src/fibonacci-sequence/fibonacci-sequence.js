// Problem: return the nth element of the Fibonacci sequence
// Details: e.g. fibonacci sequence: 1,1,2,3,5,8,13,21...

// Time complexity: O(n)

const getFibonacciEl = (i) => {
    const fibonacciArr = [1, 1];
    for (let x = 1; x < i; x++) {
        const sum =
            fibonacciArr[fibonacciArr.length - 1] +
            fibonacciArr[fibonacciArr.length - 2];
        fibonacciArr.push(sum);
    }
    return fibonacciArr[i];
};

export default getFibonacciEl;
