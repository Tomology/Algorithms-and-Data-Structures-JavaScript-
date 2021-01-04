/*
Given a string, write a function to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards. 
A permutation is a rearrangement of letters. 
The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input:      Tact Coa
Output:     True (permutations: "taco cat'; "atco eta·; etc.)
*/

function palindromePermutation(str) {
  // Count how many times each character occurs in the string
  let lookup = {};

  for (let letter of str) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  // Check that no more than one character has an odd number of occurences
  let oddCount = 0;
  for (let letter in lookup) {
    if (lookup[letter] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}

console.log(palindromePermutation("tacocat"));
console.log(palindromePermutation("tacocatl"));
