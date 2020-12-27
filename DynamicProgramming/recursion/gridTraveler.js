/*
Say that you are a traveler on a 2D grid.
You begin in the top-left corner and your goal is to travel to the
bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimensions m * n?
*/

// Without Memoization
// Time Complexity      O(2^m+n)
// Space Complexity     O(m+n)
function gridTraveler(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// With Memoization
// Time Complexty       O(m*n)
// Space Complexity     O(m+n)
function gridTravelerMemo(m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] =
    gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  return memo[key];
}

console.log(gridTravelerMemo(1, 1));
console.log(gridTravelerMemo(2, 3));
console.log(gridTravelerMemo(3, 2));
console.log(gridTravelerMemo(3, 3));
console.log(gridTravelerMemo(18, 18));
