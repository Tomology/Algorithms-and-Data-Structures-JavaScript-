/*
Write a function 'howSum(targetSum, numbers)' that takes in a targetSum 
and an array of numbers as arguments.
The function should return an array containing any combination of 
elements that add up to exactly the targetSum. If there is no combiantion
that adds up to the targetSum, then return null. 
*/

// Without Memo
// Time Complexity      O(n^m * m)
// Space Complexity     O(m)
function howSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
}

// With Memo
// Time Complexity      O(n * m^2)
// Space Complexity     O(m^2)
function howSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum(6, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
