
/**
 * @param {string} s
 * @return {string}
 */

// 辅助栈解法
// var decodeString = function(s) {
//   const len = s.length;
//   const stack = [];
//   let res = '';
//   let number = 0;
//   for(let i = 0; i < len; i++) {
//     const item = s.charAt(i);
//     const numberItem = item - 0;
//     switch(true) {
//       case '[' === item: {
//         stack.push({
//           number,
//           str: res,
//         });
//         res = '';
//         number = 0;
//         break;
//       }
//       case ']' === item: {
//         const { number, str } = stack.pop();
//         res = str.concat(res.repeat(number));
//         break;
//       }
//       case numberItem >= 0 || numberItem <= 9 : {
//         number = number * 10 + numberItem;
//         break;
//       }
//       default: res += item;
//     }
//   }
//   return res;
// };


function dfs(s, i) {
  let res = '';
  let number = 0;
  while (i < s.length) {
    const item = s[i];
    console.log('item', item);
    const numberItem = item - 0;
    switch(true) {
      case numberItem >= 0 || numberItem <= 9 : {
        number = number * 10 + numberItem;
        console.log('number', number);
        i += 1;
        break;
      }
      case '[' === item: {
        const { str, tmp } = dfs(s, i + 1);
        res += tmp.repeat(number);
        number = 0;
        i = str;
        break;
      }
      case ']' === item: {
        return {
          str: i,
          tmp: res,
        };
      }
      default: {
        res += item;
        console.log('res', res);
        i += 1;
      };
    }
  }
  return res;
}
var decodeString = function(s) {
  if(!s.length) {
    return '';
  }  
  return dfs(s, 0);
};

