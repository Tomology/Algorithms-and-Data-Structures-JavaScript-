/*
Write a function 'allConstruct(target, wordBank)' that 
accepts a target string and an array of strings.
The function should return a 2D array all the ways that the
'target' can be constructed by concatenating elements of the 'wordBank'
array. Each element of the 2D array should represent one combination
that constructs the 'target'.
You may reuse elements of 'wordBank' as many times as needed.
*/

// Without Memoization
// m = target.length
// n = wordBank.length
// Time Complexity      O(n^m)
// Space Complexity     O(m)
function allConstruct(target, wordBank) {
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
}

// With Memoization
// m = target.length
// n = wordBank.length
// Time Complexity      O(n^m)
// Space Complexity     O(m)
// Note: doesn't change since we are returning an array of ALL combos.
function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(allConstruct("hello", ["cat", "dog", "mouse"]));
console.log(allConstruct("", ["cat", "dog", "mouse"]));
