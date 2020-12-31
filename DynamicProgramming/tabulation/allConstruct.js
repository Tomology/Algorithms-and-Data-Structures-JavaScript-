/*
Write a function 'allConstruct(target, wordBank)' that 
accepts a target string and an array of strings.
The function should return a 2D array all the ways that the
'target' can be constructed by concatenating elements of the 'wordBank'
array. Each element of the 2D array should represent one combination
that constructs the 'target'.
You may reuse elements of 'wordBank' as many times as needed.
*/

// m = target
// n = wordBank.length
// Time Complexity      O(n^m)
// Space Complexity     O(n^m)
function allConstruct(target, wordBank) {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }
  return table[target.length];
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(allConstruct("hello", ["cat", "dog", "mouse"]));
console.log(allConstruct("", ["cat", "dog", "mouse"]));
