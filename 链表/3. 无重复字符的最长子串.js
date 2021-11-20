/**
 * url: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * finish date: 2021.11.20
 * 难度： 中等
 * */

/**
 * 思路为双指针，头指针不动，尾指针向右，找到字典中已经存在的key，
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let maxLen = 0;
  let start = 0;
  let end = 0;
  const lastMap = new Map();
  while (end <= len - 1) {
    const item = s[end];
    if (lastMap.has(item)) {
      /**
       * lastMap.get(item) + 1 是因为当有重复的字符的时候，
       * 要从下一位置算
       * 
       * Math.max的作用是保证了不回溯那些不正确的值。如abba
       * 当end = 3， item = a时，last[a] 为 0，
       * 但是前面我们已经知道这个时候start已经指到了2。代表有重复的值
       * 这个时候把0，代入算maxLen是不对的
       */
      start = Math.max(start, lastMap.get(item) + 1);
    }
    maxLen = Math.max(maxLen, end - start + 1);
    lastMap.set(item, end);
    end++;
  }
  return maxLen;
};
