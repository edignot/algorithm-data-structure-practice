// Problem: return a factorial number of a given positive integer

// Loop approach: 
export const getFactorial = (num) => {
  let result = 1
  for (let i = 2; i <= num; i++) {
    result *= i
  }
  return result
}

// Recursive approach:
export const getFactorialRecursion = (num) => {
  if (num > 1) {
    return num * getFactorialRecursion(num - 1)
  } else {
    return 1
  }
}