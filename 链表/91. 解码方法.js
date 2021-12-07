/**
 * url: https://leetcode-cn.com/problems/decode-ways/
 * finish date: 2021.12.3
 * 难度： 中等
 * */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const len = s.length;
  const f = Array.from({
    length: len + 1,
  }).fill(0);
  f[0] = 1;
  for (let i = 1; i <= len; i++) {
    if (s[i - 1] != 0) {
      f[i] += f[i - 1];
    }

    if (i > 1 && s[i - 2] != 0 && (s[i - 2] - 0) * 10 + (s[i - 1] - 0) <= 26) {
      f[i] += f[i - 2];
    }
  }
  // return f[f.lenght - 1];
  // console.log(`f: ${f}`)
  return f[len];
};

/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  const len = s.length;
  // a = f[i - 2]
  // b = f[i - 1]
  // c = f[i]
  let a = 0, b = 1, c = 0;
  for (let i = 1; i <= len; i++) {
      c = 0;
      if (s[i - 1] != 0) {
          c += b;
      }
      if (i > 1 && s[i - 2] !=0 && (s[i - 2] - 0) * 10 + (s[i - 1] - 0) <= 26) {
          c += a;
      }
      a = b;
      b = c;
  }
  return c
};

/**
 * @param {string} s
 * @return {number}
 */

// 类似正则的思路来做动态规划
 var numDecodings = function(s) {
  const len = s.length;
  let pre = 1;
  let current = 1;
  for (let i = 0; i <= len - 1; i++) {
      let tmp = current;
      if (s[i] == 0) {
          if (s[i - 1] == 1 || s[i - 1] == 2) {
             current = pre;
          } else {
              return 0;
          }
      } else if (s[i - 1] == 1 || ((s[i - 1] == 2) && (s[i] >= 1 && s[i] <= 6))) {
          current += pre;
      }
      pre = tmp;
  }
  return current;
};
