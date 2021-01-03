// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// ASCII (128 characters), extended ASCII (256 characters) or Unicode (143,859 characters) String? Assume ASCII here.

// Implementation with additional data structure
function isUnique(str) {
  if (str.length > 128) {
    return false;
  }

  const lookup = new Set();

  for (let letter of str) {
    if (lookup.has(letter)) {
      return false;
    } else {
      lookup.add(letter);
    }
  }

  return true;
}

console.log(isUnique("abcdefghijklmnopqrstuvwxyz1234567890"));
console.log(isUnique("awbcdefghijklmnopqrstuvwxyz1234567890"));
