/**
 * url: https://leetcode-cn.com/problems/add-strings/
 * finish date: 2021.11.21
 * 难度： 简单
 * */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let add = 0;
  let stack = [];
  while(i >= 0 || j >= 0 || add !== 0) {
      const x = i >= 0 ? num1[i] - 0 : 0;
      const y = j >= 0 ? num2[j] - 0 : 0;
      const count = x + y + add;
      stack.push(count % 10);
      add = Math.floor(count / 10);
      i--;
      j--;
  } 
  return stack.reverse().join('');
};