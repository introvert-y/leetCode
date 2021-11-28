/**
 * url: https://leetcode-cn.com/problems/combinations/
 * finish date: 2021.11.28
 * 难度： 中等
 * */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const list = [];

  backtract(n, k, 1, [], list);
  return list;
};

var backtract = function (n, k, begin, pathList, resList) {
  if (pathList.length === k) {
    resList.push([...pathList]);
    return;
  }
  for (let i = begin; i <= n; i++) {
    pathList.push(i);
    backtract(n, k, i + 1, pathList, resList);
    pathList.pop();
  }
};
