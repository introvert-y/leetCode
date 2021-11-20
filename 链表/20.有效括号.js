/**
 * url: https://leetcode-cn.com/problems/valid-parentheses/
 * finish date: 2021.11.19
 * 难度： 简单
 * */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const stack = [];
  const map = new Map();
  map.set('}', '{');
  map.set(')', "(");
  map.set(']', '[');
  const len = s.length;
  let i = 0;
  while(i <= len - 1) {
      if (!map.has(s[i])) {
          stack.push(s[i]);
      } else {
          const stackLen = stack.length;
          if (stackLen && (stack[stackLen - 1]  == map.get(s[i]))) {
              stack.pop();
          } else {
              return false;
          }
      }
      i++;
  }
  return !stack.length;
};