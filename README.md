# Algorithms Practice

Each problem directory includes:
-   Problem description with the link to original problem ( LeetCode, HackerRank, CodeWars... )
-   One ore more working solution to the problem
-   Unit test file

There might still be some personal comments added for my learning purposes. 

## Data Structures

### Array

-   [Fibonacci sequence](https://github.com/edignot/algorithms/tree/master/src/fibonacci-sequence)

```
const getFibonacciEl = (i) => {
    const fibonacciArr = [1, 1]
    for (let x = 1; x < i; x++) {
        const sum =
            fibonacciArr[fibonacciArr.length - 1] +
            fibonacciArr[fibonacciArr.length - 2];
        fibonacciArr.push(sum);
    }
    return fibonacciArr[i];
}

...

describe("Fibonacci sequence", () => {
    test("2nd element of fibonacci sequence", () => {
        expect(getFibonacciEl(2)).toBe(2)
    })
    test("7th element of fibonacci sequence", () => {
        expect(getFibonacciEl(7)).toBe(21)
    })
    test("12th element of fibonacci sequence", () => {
        expect(getFibonacciEl(12)).toBe(233)
    })
})
```

## Usage
-   Clone this repo
-   Run npm install to get dependencies
-   Run npm test to run testing files

## Contributors
[Edita Ignot](https://github.com/edignot) | [MY COMMITS](https://github.com/edignot/algorithms/commits/master?author=edignot&branch=master)
