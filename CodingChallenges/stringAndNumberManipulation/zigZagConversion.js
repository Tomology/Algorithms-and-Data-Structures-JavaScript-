/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/

const convert = (s, numRows) => {
  const charMap = new Map();
  let pos = 0;
  let incrementing = true;
  let result = "";
  for (let char of s) {
    if (pos === numRows) incrementing = false;
    if (pos === 1) incrementing = true;
    if (incrementing) {
      pos++;
    } else {
      pos--;
    }
    if (!charMap.has(pos)) {
      charMap.set(pos, "");
    }
    charMap.set(pos, charMap.get(pos).concat(char));
  }
  for (let chars of charMap.values()) {
    result += chars;
  }
  return result;
};

console.log(convert("PAYPALISHIRING", 3));
