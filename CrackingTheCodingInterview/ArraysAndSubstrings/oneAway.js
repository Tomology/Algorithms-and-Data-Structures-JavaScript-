/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE

pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bae -> false
*/

function oneAway(str1, str2) {
  // Check length
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // Get shorter and longer string
  let shorter = str1.length < str2.length ? str1 : str2;
  let longer = str1.length < str2.length ? str2 : str1;

  let indexShorter = 0;
  let indexLonger = 0;
  let foundDifference = false;
  while (indexShorter < shorter.length && indexLonger < longer.length) {
    if (longer[indexLonger] !== shorter[indexShorter]) {
      // ensure this is the first instance found
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
      if (longer.length === shorter.length) {
        // on replace, move shorter pointer
        indexShorter++;
      }
    } else {
      indexShorter++; // if matching, move shorter pointer
    }
    indexLonger++; // always move pointer for longer string
  }
  return true;
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bae"));
