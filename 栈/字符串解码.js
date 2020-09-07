
/**
 * @param {string} s
 * @return {string}
 */
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
      case numberItem >= 0 || numberItem <= 9 : {
        number = number * 10 + numberItem;
        break;
      }
      default: res += item;
    }
  }
  return res;
};