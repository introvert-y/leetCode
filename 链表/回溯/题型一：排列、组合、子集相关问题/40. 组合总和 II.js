/**
 * url: https://leetcode-cn.com/problems/combination-sum-ii/
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
var combinationSum2 = function (candidates, target) {
  const len = candidates.length;
  const list = [];
  const used = Array.from({
    length: len,
  });
  backTract(candidates.sort(compare), len, target, 0, used, [], list);
  return list;
};

var backTract = function (
  options,
  len,
  target,
  begin,
  used,
  pathList,
  resList
) {
  // console.log(`begin: ${begin} used: ${used} pathList: ${pathList}`)
  if (target === 0) {
    resList.push([...pathList]);
    // console.log('resList', resList)
    return;
  }
  for (let i = begin; i <= len - 1; i++) {
    if (target - options[i] < 0) {
      break;
    }
    if (used[i]) {
      continue;
    }
    if (i > 0 && options[i] === options[i - 1] && !used[i - 1]) {
      continue;
    }
    used[i] = true;
    pathList.push(options[i]);
    backTract(
      options,
      len,
      target - options[i],
      i + 1,
      used,
      pathList,
      resList
    );
    used[i] = false;

    pathList.pop();
  }
};
