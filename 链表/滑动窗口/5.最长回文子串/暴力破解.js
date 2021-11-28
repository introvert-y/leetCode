/**
 * @param {string} s
 * @return {string}
 * finish date: 2021.11.18
 */
 var longestPalindrome = function(s) {
  const len = s.length;
  if(len < 2) {
      return s;
  }
  let begin = 0;
  let maxLen = 1;
  for (let i = 0; i <= len - 1; i++) {
      for (let j = i + 1; j <= len - 1; j++) {
          if (j - i + 1 > maxLen && validPalindrome(i, j, s)) {
              begin = i;
              maxLen = j - i + 1;
          }
      }
  }
  return s.substring(begin, begin + maxLen);
};
var validPalindrome = function(left, right, s) {
  while(left < right) {
      if (s[left] !== s[right]) {
          return false;
      }
      left++;
      right--;
  }
  return true;
}