/**
 * 
  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/two-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 方法一 暴力求解
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    const item = nums[i];
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (target - nums[j] === nums[i]) {
        return [i, j];
      }
    }
  }
  return [];
};

// 方法二 两遍哈希表
// var twoSum = function(nums, target) {
//   const hashMap = new Map();
//   for(let i =0 ; i <= nums.length - 1; i++) {
//     hashMap.set(nums[i], i);
//   }
//   console.log(hashMap);
//   for(let i = 0; i <= nums.length - 1; i++) {
//       const item = target - nums[i];
//       if(hashMap.has(item) && hashMap.get(item) !== i) {
//           return [i, hashMap.get(item)];
//       }
//   }
//   return [];
// };

// 方法三 两遍哈希表
// var twoSum = function(nums, target) {
//   const hashMap = new Map();
//   for(let i = 0; i <= nums.length - 1; i++) {
//       const item = target - nums[i];
//       if(hashMap.has(nums[i])) {
//           return [hashMap.get(nums[i]), i];
//       }
//       hashMap.set(item, i);
//   }
//   return [];
// };
console.log(twoSum([2, 7, 11, 15], 9));
