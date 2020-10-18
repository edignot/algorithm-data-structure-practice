// Problem: Find if given number is a prime number or not. Return true or false
// Details: Prime number can be divided by 1 or itself

// Time complexity: if input number is 1 or 2 -> O(1), if input number > 2 -> O(n), but if number is divided by 2 even though it's big e.g. 1000000000... , it's O(1) too, because it stops running immediately
export const isNumberPrime = (num) => {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) isPrime = false;
    }
    return isPrime;
};

// Algorithm optimization with Math.sqrt()
export const isNumberPrimeMath = (num) => {
    let isPrime = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
};
