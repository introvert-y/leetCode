/**
 * 
 * 394. 字符串解码
// 难度： 中等
给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */

// 辅助栈解法
var decodeString = function(s) {
  const len = s.length;
  const stack = [];
  let res = '';
  let number = 0;
  for(let i = 0; i < len; i++) {
    const item = s.charAt(i);
    const numberItem = item - 0;
    switch(true) {
      case '[' === item: {
        stack.push({
          number,
          str: res,
        });
        res = '';
        number = 0;
        break;
      }
      case ']' === item: {
        const { number, str } = stack.pop();
        res = str.concat(res.repeat(number));
        break;
      }
      case numberItem >= 0 && numberItem <= 9 : {
        number = number * 10 + numberItem;
        break;
      }
      default: res += item;
    }
  }
  return res;
};


// function dfs(s, i) {
//   let res = '';
//   let number = 0;
//   while (i < s.length) {
//     const item = s.charAt(i);
//     const numberItem = item - 0;
//     switch(true) {
//       case numberItem >= 0 && numberItem <= 9 : {
//         number = number * 10 + numberItem;
//         i += 1;
//         break;
//       }
//       case '[' === item: {
//         const { crtIndex, tmp } = dfs(s, i + 1);
//         res += tmp.repeat(number);
//         number = 0;
//         i = crtIndex + 1;
//         break;
//       }
//       case ']' === item: {
//         return {
//           crtIndex: i,
//           tmp: res,
//         };
//       }
//       default: {
//         res += item;
//         i += 1;
//       };
//     }
//   }
//   return res;
// }
// var decodeString = function(s) {
//   if(!s.length) {
//     return '';
//   }  
//   return dfs(s, 0);
// };

// 栈
// var decodeString = function(s) {
//   if(!s.length) {
//     return '';
//   }
//   const len = s.length;
//   const stack = [];
//   let res = '';
//   let number = 0;
//   for (let i = 0; i <= len - 1; i++) {
//     const item = s.charAt(i);
//     const numberItem = item - 0;
//     switch(true) {
//       case '[' === item: {
//         stack.push({
//           repeatCount: number,
//           beforeStr: res,
//         });
//         res = '';
//         number = 0;
//         break;
//       }
//       case ']' === item: {
//         const {repeatCount, beforeStr} = stack.pop();
//         res = beforeStr + res.repeat(repeatCount);
//         break;
//       }
//       case numberItem > 0 || numberItem <= 9: {
//         number = numberItem + number * 10 ;
//         break;
//       }
//       default: {
//         res += item;
//       }
//     }
//   }
//   return res;
// };


console.log(decodeString("3[a]2[bc]"));