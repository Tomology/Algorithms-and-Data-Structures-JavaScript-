function reverseInt(num) {
  let result = 0;
  let digit = 0;

  while (num) {
    // Get right most digit - e.g. 123/10 -> 12.3 -> 3
    digit = num % 10;

    // Add digit to results - e.g. 123 -> 1230 + 4 -> 1234
    result = result * 10 + digit;

    // Remove right most digit using bitwise 'or' operator - e.g. 123 -> 12.3 -> 12
    num = (num / 10) | 0;
  }

  return result;
}
