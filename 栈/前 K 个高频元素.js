// 347. 前 K 个高频元素
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function compare(a, b) {
  if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    return 1;
  }
  if (a > b ) {
    return -1;
  }
  // a must be equal to b
  return 0;
}
var topKFrequent = function(nums, k) {
  const length = nums.length;
  if (!length) {
    return [];
  }
  const obj = {};
  for(let i = 0; i < length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }
  const arr = Object.keys(obj);
  if(arr.length === k) {
    return arr;
  }
  return arr.sort((a,b) => compare(obj[a], obj[b])).splice(0, k);
};