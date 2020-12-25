/*
Write a function 'fib(n)' that takes in anumber as an argument. 
The function should return the n-th number of the Fibonacci sequence.
*/

// Without Memoization
// Time Complexity      O(2^N)
// Space Complexity     O(N)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// With Memoization
// JS Object, keys will be arg to fn, value will be return value
// Time Complexity      O(N)
// Space Complexity     O(N)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
