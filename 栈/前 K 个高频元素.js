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
// var topKFrequent = function(nums, k) {
//   const length = nums.length;
//   if (!length) {
//     return [];
//   }
//   const obj = new Map();
//   const list = [];
//   for(let i = 0; i < length; i++) {
//     if (!obj.has(nums[i])) {
//       obj.set(nums[i], {
//         val: 0,
//         mark: false,
//       })
//     } else {
//       const { val, mark } = obj.get(nums[i]);
//       if(!mark) {
//         obj.set(nums[i], {
//           val: val + 1,
//           mark: val + 1 >= k ? true : false,
//         })
//         if (obj.get(nums[i]).mark) {
//           list.push(nums[i]);
//         }
//       }
//     }
//   }
//   return list;
// };

// for (Integer key : map.keySet()) {
//   if (pq.size() < k) {
//       pq.add(key);
//   } else if (map.get(key) > map.get(pq.peek())) {
//       pq.remove();
//       pq.add(key);
//   }
// }
// // 取出最小堆中的元素
// List<Integer> res = new ArrayList<>();
// while (!pq.isEmpty()) {
//   res.add(pq.remove());
// }
