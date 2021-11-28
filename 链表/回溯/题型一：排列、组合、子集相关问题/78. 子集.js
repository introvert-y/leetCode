/**
 * url: https://leetcode-cn.com/problems/subsets/
 * finish date: 2021.11.28
 * 难度： 中等
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const len = nums.length;
  const list = [[]];
  backtract(nums, len, 0, [], list);
  return list;
};
var backtract = function(options, len, begin, pathList, resList) {
  for(let i = begin; i <= len - 1; i++) {
      pathList.push(options[i]);
      backtract(options, len, i + 1, pathList, resList);
      resList.push([...pathList])
      pathList.pop();
  }
}