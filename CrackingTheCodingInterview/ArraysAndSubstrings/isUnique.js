// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// ASCII (128 characters), extended ASCII (256 characters) or Unicode (143,859 characters) String? Assume ASCII here.

// Below implementation is using additional data structure: object.

function isUnique(str) {
  if (str.length > 128) {
    return false;
  }

  let lookup = {};

  for (let letter of str) {
    if (lookup[letter]) {
      return false;
    } else {
      lookup[letter] = 1;
    }
  }

  return true;
}

isUnique("abcdefghijklmnopqrstuvwxyz1234567890");
