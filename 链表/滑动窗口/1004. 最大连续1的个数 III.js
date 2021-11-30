/**
 * url: https://leetcode-cn.com/problems/max-consecutive-ones-iii/
 * finish date: 2021.12.1
 * 难度： 中等
 * */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const len = nums.length;
  let left = 0;
  let right = 0;
  let maxCount = 0;
  let keyList = [0, 0];
  let res = 0;
  while (right <= len - 1) {
    keyList[nums[right]] += 1;

    maxCount = Math.max(maxCount, keyList[nums[right]]);
    right++;
    if (right - left > keyList[1] + k) {
      keyList[nums[left]]--;
      left++;
    }
    res = Math.max(res, right - left);
    // console.log(`maxCount: ${maxCount} res:${res}`)
  }
  return res;
};
