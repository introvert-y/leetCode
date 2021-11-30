/**
 * url: https://leetcode-cn.com/problems/longest-repeating-character-replacement/
 * finish date: 2021.12.1
 * 难度： 中等
 * */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const len = s.length;
  let right = 0;
  let left = 0;
  let maxCount = 0;
  let res = 0;
  let freqList = Array.from({
    length: 26,
  }).fill(0);
  // 找到拥有K + 1种字符的最大长度
  while (right <= len - 1) {
    freqList[s.charCodeAt(right) - 65]++;
    maxCount = Math.max(maxCount, freqList[s.charCodeAt(right) - 65]);
    right++;
    if (right - left > maxCount + k) {
      freqList[s.charCodeAt(left) - 65]--;
      left++;
    }

    res = Math.max(res, right - left);
    // console.log(`right: ${right} left: ${left} maxCount:${maxCount} res: ${res}`)
  }
  return res;
};
