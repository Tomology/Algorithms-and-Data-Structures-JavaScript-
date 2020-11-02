/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.

For example:
  '{}()[]' is valid
  '{{[]()}}' is valid
  '{[}]' is not valid
*/

const isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  let stack = [];

  for (let val of s) {
    if (val === "(" || val === "{" || val === "[") {
      stack.push(val);
    } else if (val === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (val === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (val === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
