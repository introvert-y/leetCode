// 347. 前 K 个高频元素
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//  方法一 暴力求解
// function compare(a, b) {
//   if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
//     return 1;
//   }
//   if (a > b ) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// }
// var topKFrequent = function(nums, k) {
//   const length = nums.length;
//   if (!length) {
//     return [];
//   }
//   const obj = {};
//   for(let i = 0; i < length; i++) {
//     if (!obj[nums[i]]) {
//       obj[nums[i]] = 1;
//     } else {
//       obj[nums[i]] += 1;
//     }
//   }
//   const list = Object.keys(obj).sort((a,b) => compare(obj[a], obj[b]));
//   return list.slice(0, k);
// };

// 方法二
var topKFrequent = function(nums, k) {
  const length = nums.length;
  if (!length) {
    return [];
  }
  const obj = new Map();
  const list = [];
  const res = [];
  for(let i = 0; i < length; i++) {
    if (!obj.has(nums[i])) {
      obj.set(nums[i], 0)
    } else {
      obj.set(nums[i], obj.get(nums[i]) + 1);
    }
  }
  const mapLength = obj.size();
  for (let [key, value] of obj) {
    list.push(key);
  }
  const listLength = list.length;
  for (let i = 0; i < listLength; i++) {
    for(let j = i + 1; j < listLength; j++) {
      if (obj.get(i) > obj.get(j)) {
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
    if(k === i) {
      return list.slice(0, k).reverse().map(item => obj.get(item));
    }
  }
};


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
  const list = Object.keys(obj);
  const len = list.length;
  const res = [];
  if (list.lenth === k) {
    return list;
  }
  for (let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      if (obj[i] < obj[j]) {
        [list[j], list[i]] = [list[i], list[j]];
      }
    }
    res.push(list[i]);
    if(res.length === k) {
      return res;
    }
  }
};