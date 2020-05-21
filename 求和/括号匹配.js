/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/*
  检验括号匹配的方法，就是对给定的字符串依次检验：若是左括号，入栈；若是右括
  号，出栈一个左括号判断是否与之相匹配；是其它字符，不检验。检验到字符串尾，还要
  检查栈是否空。只有栈空，整个字符串才匹配完。
*/

var isValid = function (s) {
  const arr = [];
  for (let i = 0; i <= s.length - 1; i++) {
    const str = s.charAt(i);
    switch (str) {
      case "(":
      case "[":
      case "{": {
        arr.push(str);
        break;
      }
      case ")":
      case "]":
      case "}": {
        if (!arr.length) {
          return false;
        }
        const topElement = arr.pop();
        if (
          !(
            (topElement === "(" && str === ")") ||
            (topElement === "[" && str === "]") ||
            (topElement === "{" && str === "}")
          )
        ) {
          return false;
        }
        break;
      }
    }
  }
  return !arr.length;
};

console.log(isValid("()[]"));

// es6 Map映射

// var isValid = function (s) {
//   const hashMap = new Map();
//   hashMap.set(")", "(");
//   hashMap.set("}", "{");
//   hashMap.set("]", "[");
//   const arr = [];
//   for (let i = 0; i <= s.length - 1; i++) {
//     const str = s.charAt(i);
//     if (!hashMap.has(str)) {
//       arr.push(str);
//     } else {
//       const topElement = !arr.length ? "#" : arr.pop();
//       if (topElement !== hashMap.get(str)) {
//         return false;
//       }
//     }
//   }
//   return !arr.length;
// };
