/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 */

const myAtoi = function (s) {
  const charSet = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  const results = [];
  const minInt = Math.pow(-2, 31);
  const maxInt = Math.pow(2, 31) - 1;
  let negative = false;
  let positive = false;
  let convertedInt = 0;

  for (let char of s) {
    if (char === "-") {
      negative = true;
    }

    if (char === " ") {
      continue;
    }

    if (char === "-" && negative) {
      break;
    }

    if (char === "+") {
      positive = true;
    }

    if (char === "+" && positive) {
      break;
    }

    if (charSet.has(char)) {
      results.push(char);
    } else {
      break;
    }
  }

  for (let char of results) {
    convertedInt = convertedInt * 10 + parseInt(char);
  }

  if (negative) {
    convertedInt = convertedInt * -1;
  }

  if (convertedInt < minInt) {
    return minInt;
  }

  if (convertedInt > maxInt) {
    return maxInt;
  }

  return convertedInt;
};

console.log(myAtoi(" -  4321 a word"));
