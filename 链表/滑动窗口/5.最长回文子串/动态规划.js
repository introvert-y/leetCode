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
  const pb = Array.from({
      length: len
  });
  for (let i = 0; i <= len - 1; i++) {
      pb[i] = Array.from({
          length: len
      });
      pb[i][i] = true;

  }
  for (let j = 1; j <= len - 1; j++){
      for (let i = 0; i < j; i++) {
          if (s[i] !== s[j]) {
              pb[i][j] = false;
          } else {
              if (j - i < 3) {
                  pb[i][j] = true;
              } else {
                  pb[i][j] = pb[i + 1 ][j - 1];
              }
          }
          if (pb[i][j] && maxLen < j - i + 1) {
              maxLen = j - i + 1;
              begin = i;
 
          }
      }
   
  }

  return s.substring(begin, begin + maxLen);
};