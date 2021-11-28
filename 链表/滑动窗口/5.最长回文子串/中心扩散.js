/**
 * @param {string} s
 * @return {string}
 * finish date: 2021.11.19
 */
 var longestPalindrome = function(s) {
  const len = s.length;
  if (len < 2) {
      return s;
  }
  let maxLen = 1;
  let begin = 0;
  for (let i = 0; i < len - 1; i++){
      const len1 = caculateMaxLength(s, i, i);
      const len2 = caculateMaxLength(s, i, i + 1);
      const max = Math.max(len1, len2);
      if (max > maxLen) {
          maxLen = max;
          begin =  i - Math.floor((max - 1) / 2);
      }
  }

  return s.substring(begin, begin + maxLen);
};
var caculateMaxLength = function(s, i, j) {
  while (i >= 0 && j <= s.length) {
      if (s[i] === s[j]) {
          i--;
          j++;
      } else {
          break;
      }
  }
  return j - i - 1;
}