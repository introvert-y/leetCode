/**
 * url: https://leetcode-cn.com/problems/subsets-ii/
 * finish date: 2021.11.28
 * 难度： 中等
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var compare = function (a, b) {
  return a - b;
};
var subsetsWithDup = function (nums) {
  const len = nums.length;
  const list = [[]];
  const used = Array.from({
    length: len,
  });
  backtract(nums.sort(compare), len, 0, used, [], list);
  return list;
};

var backtract = function (options, len, begin, used, pathList, resList) {
  // console.log(`begin: ${begin} pathList:${pathList}`)
  for (let i = begin; i <= len - 1; i++) {
    if (used[i]) {
      continue;
    }
    if (i > 0 && options[i] === options[i - 1] && !used[i - 1]) {
      continue;
    }
    pathList.push(options[i]);
    used[i] = true;
    resList.push([...pathList]);
    backtract(options, len, i + 1, used, pathList, resList);
    pathList.pop();
    used[i] = false;
  }
};
