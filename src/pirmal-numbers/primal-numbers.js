// Problem: Find if given number is a prime number or not. Return true or false
// Details: Prime number can be divided by 1 or itself

// Time complexity:

const isNumberPrime = (num) => {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) isPrime = false;
    }
    return isPrime;
};

export default isNumberPrime;
