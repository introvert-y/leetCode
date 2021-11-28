/**
 * url: https://leetcode-cn.com/problems/permutations/
 * finish date: 2021.11.25
 * 难度： 中等
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 回溯
let list = [];
var permute = function (nums) {
  const len = nums.length;
  if (!len) {
    return [];
  }
  list = [];
  generateList(nums, 0, []);
  //    console.log('list', list);
  return list;
};
var generateList = function (nums, index, curList) {
  const len = nums.length;
  const curListLen = curList.length;
  // console.log(`index: ${index} list: ${curList} nums:${nums}`)
  if (len === curListLen) {
    list.push([...curList]);
    return;
  }
  for (let i = 0; i <= len - 1; i++) {
    if (!curList.includes(nums[i])) {
      curList.push(nums[i]);
      generateList(nums, i, curList);
      curList.pop();
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const len = nums.length;
  
  const list = [];
  if (!len) {
      return list;
  }
  const used = Array.from({
      length: len,
  });
  dfs(nums, len, 0, [], used, list);
 
  return list;
};

var dfs = function (nums, len, depth, path, used, list) {
  // console.log(`depth: ${depth} path: ${path}`)
  if (len === depth) {
      list.push([...path]);
  }

  for (let i = 0; i <= len - 1; i++) {
      if (used[i]) {
          continue;
      }
      path.push(nums[i]);
      used[i] = true;
      dfs(nums, len, depth + 1, path, used, list);
      path.pop();
      used[i] = false;
  }
}
