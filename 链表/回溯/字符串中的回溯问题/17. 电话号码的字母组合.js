/**
 * url: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * finish date: 2021.11.22
 * 难度： 中等
 * */

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const len = digits.length;
  const list = [];
  if (!len) {
      return list;
  }
  const numberMap = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
  };
  backtract(digits, len, numberMap, 0, '', list);
  return list;
};

var backtract = function(options, len, numberMap, num, path, resList) {
  // console.log(`path.length: ${path.length} num: ${num} path: ${path}`)
  if (path.length === len) {
      resList.push(path);
      return;
  }
  const curList = numberMap[options[num]];
  const curLen = curList && curList.length || 0;
  for (let i = 0; i <= curLen - 1; i++) {
      // console.log(`item: ${curList[i]}`)
      path += curList[i];
      backtract(options, len, numberMap, num + 1, path, resList);
      path = path.substring(0, path.length - 1)
  }
}