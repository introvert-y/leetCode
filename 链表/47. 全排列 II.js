/**
 * url: https://leetcode-cn.com/problems/permutations-ii/
 * finish date: 2021.11.25
 * 难度： 中等
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function compare(a, b) {
  if (a < b) {
    // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
var permuteUnique = function (nums) {
  const len = nums.length;

  const list = [];
  if (!len) {
    return list;
  }
  const used = Array.from({
    length: len,
  });
  dfs(nums.sort(compare), len, 0, [], used, list);

  return list;
};

var dfs = function (nums, len, depth, path, used, list) {
  //   console.log(`depth: ${depth} path: ${path}`)
  if (len === depth) {
    list.push([...path]);
  }

  for (let i = 0; i <= len - 1; i++) {
    //   console.log(`i: ${i} ${nums[i] === nums[i - 1]}`)
    if (used[i]) {
      continue;
    }
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
      continue;
    }
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, len, depth + 1, path, used, list);
    path.pop();
    used[i] = false;
  }
};
