export function sum(a,b) {
    return a + b
}


export function multiply(a,b) {
    return a * b
}

// 1. Find the maximum value in an array
export function findMaxValue(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return Math.max(...arr);
  }