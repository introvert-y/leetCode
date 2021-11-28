/**
 * url: https://leetcode-cn.com/problems/combination-sum/
 * finish date: 2021.11.28
 * 难度： 中等
 * */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var compare = function (a, b) {
  return a - b;
};
var combinationSum = function (candidates, target) {
  const len = candidates.length;
  const list = [];
  backTrack(candidates.sort(compare), len, target, 0, [], list);
  // console.log('list', list);
  return list;
};

var backTrack = function (options, len, target, begin, pathList, resList) {
  if (target === 0) {
    resList.push([...pathList]);
    return;
  }
  for (let i = begin; i <= len - 1; i++) {
    const item = target - options[i];
    if (item < 0) {
      break;
    }
    pathList.push(options[i]);
    // console.log('pathList', pathList);
    backTrack(options, len, item, i, pathList, resList);
    pathList.pop();
  }
};
