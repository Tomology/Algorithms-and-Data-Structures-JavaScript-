/*  
    Input: s = "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.
*/

const longestPalindromeSubstring = (s) => {
  let N = s.length;
  if (N === 0) {
    return;
  }

  // Position count
  N = 2 * N + 1;
  let l = new Array(N).fill(0);
  return l;
};

console.log(longestPalindromeSubstring("babad"));
