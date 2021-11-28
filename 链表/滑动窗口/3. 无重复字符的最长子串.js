/**
 * url: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * finish date: 2021.11.29
 * 难度： 中等
 * */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let left = 0;
  let right = 0;
  let str = '';
  let maxLen = 0;
  while (right <= len - 1) {
      if (str.includes(s[right])) {
          left++;
          str = str.slice(1)
      } else {
          str += s[right];
          right++;
      }
      maxLen = Math.max(right - left, maxLen);
      // console.log(`str: ${str} maxLen: ${maxLen}`)

  }
  return maxLen;
};

