/**
 * url: https://leetcode-cn.com/problems/generate-parentheses/
 * finish date: 2021.11.20
 * 难度： 中等
 * */

/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
let list = [];
var generateParenthesis = function (n) {
  let str = "";
  list = [];
  validOrder(str, 0, 0, n);
  return list;
};
var validOrder = function (str, open, close, n) {
  if (str.length === 2 * n) {
    list.push(str);
  }
  if (open < n) {
    validOrder(str + "(", open + 1, close, n);
  }
  if (open > close) {
    validOrder(str + ")", open, close + 1, n);
  }
};
