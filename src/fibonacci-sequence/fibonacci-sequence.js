// Problem: return the nth element of the Fibonacci sequence
// Fibonacci sequence: 1,1,2,3,5,8,13,21...

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
