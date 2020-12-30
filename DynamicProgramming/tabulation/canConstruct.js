/*
Write a function 'canConstruct(target, wordBank)' that 
accepts a target string and an array of strings.
The function should return a boolean indicating whether or not the
'target' can be constructed by concatenating elements of the 'wordBank'
array.
You may reuse elements of 'wordBank' as many times as needed.
*/

// m = target
// n = wordBank.length
// Time Complexity      O(m^2 * n)
// Space Complexity     O(m)
function canConstruct(target, wordBank) {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        // if the word matches the characters starting at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
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
