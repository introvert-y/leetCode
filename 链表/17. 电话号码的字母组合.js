/**
 * url: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * finish date: 2021.11.22
 * 难度： 中等
 * */

/**
 * @param {string} digits
 * @return {string[]}
 */

// 方法一：暴力
//  var letterCombinations = function(digits) {
//   const len = digits.length;
//   let stack = [];
//   if (!len) {
//       return stack;
//   }
//   const numberMap = {
//   };
//   let j = 1;
//   for(let i = 97; i < 122; ) {
//           numberMap[++j] = (j === 7 || j === 9) ? [String.fromCharCode(i), String.fromCharCode(i + 1), String.fromCharCode(i + 2), String.fromCharCode(i + 3)] : [String.fromCharCode(i), String.fromCharCode(i + 1), String.fromCharCode(i + 2)];
//            i += (j === 7 || j === 9) ? 4 : 3

//   }
//   // console.log('numberMap', numberMap)
//   if (len === 1) {
//       return numberMap[digits];
//   }
//   let strLen = digits.length;
//   let str = digits;
//   while(str.length > 0) {
//       if (!stack.length) {
//           stack = dealWidthTwo(numberMap[str[0]], numberMap[str[1]])
//          str = str.slice(2)
//       } else {
//           stack = dealWidthTwo(stack, numberMap[str[0]])
//           str = str.length > 1 ? str.slice(1) : '';
//       }
//       // console.log('stack', stack, str.length);
//       // console.log('str', str);
//   }
//   return stack;
// };
// var dealWidthTwo = function(list1, list2) {
//   const len1 = list1 ? list1.length : 0;
//   const len2 = list2 ? list2.length : 0;
//   // console.log('list1', list1);
//   // console.log('list2', list2);
//   const list = [];
//   for(let i = 0; i <= len1 - 1; i++) {
//       for (let j = 0; j <= len2 - 1; j++) {
//           list.push(list1[i] + list2[j]);
//       }
//   }
//   return list;
// }

/**
 * @param {string} digits
 * @return {string[]}
 * 回溯
 */
let stack = [];
const numberMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
var letterCombinations = function (digits) {
  const len = digits.length;
  stack = [];

  if (!len) {
    return stack;
  }

  backtrack(digits, 0, "");
  return stack;
};
var backtrack = function (source, index, str) {
  // console.log(`backtrack str: ${str}  index:${index}`);
  const len = source.length;
  if (len === index) {
    stack.push(str);
  } else {
    const item = source[index];
    const curMapList = numberMap[item];
    const curLen = curMapList.length;
    for (let i = 0; i <= curLen - 1; i++) {
      backtrack(source, index + 1, str + curMapList[i]);
    }
  }
};
