/**
 * url: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * finish date: 2021.11.30
 * 难度： 中等
 * */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let right = 0;
  let minLen = len;
  let total = 0;
  let count = 0;
  for (let left = 0; left <= len - 1; left++) {
    if (left != 0 && total >= target) {
      total -= nums[left - 1];
    }
    while (right <= len - 1 && total < target) {
      total += nums[right];
      count += nums[right];
      right++;
    }
    if (total >= target) {
      minLen = Math.min(minLen, right - left);
    }
    // console.log(`right: ${right} left: ${left} total: ${total} count: ${count} minLen: ${minLen}`)
  }
  return count >= target ? minLen : 0;
};


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  const len = nums.length;
  let right = 0;
  let left = 0;
  let minLen = len;
  let total = 0;
  let count = 0;
  while (right <= len -1) {
      total += nums[right];
      while(total >= target) {
          count = total;
          minLen = Math.min(minLen, right - left + 1);
          total -= nums[left];
          left++
      }
      right++;
      // console.log(`right: ${right} left: ${left} total: ${total} count: ${count} minLen: ${minLen}`)
  }
  return count >= target ? minLen : 0;
};
