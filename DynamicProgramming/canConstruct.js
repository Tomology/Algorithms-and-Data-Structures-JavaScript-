/*
Write a function 'canConstruct(target, wordBank)' that 
accepts a target string and an array of strings.
The function should return a boolean indicating whether or not the
'target' can be constructed by concatenating elements of the 'wordBank'
array.
You may reuse elements of 'wordBank' as many times as needed.
*/

// Without Memoization
// Time Complexity      O(n^m * m)
// Space Complexity     O(m^2)

function canConstruct(target, wordBank) {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
}

// With Memoization
// Time Complexity      O(n * m^2)
// Space Complexity     O(m^2)

function canConstructMemo(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstructMemo(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(canConstruct("", ["cat", "dog", "mouse"]));
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
