/**
 * url: https://leetcode-cn.com/problems/zigzag-conversion/
 * finish date: 2021.12.13
 * 难度： 中等
 * */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  const len = s.length;
  const minLen = Math.min(s.length, numRows);
  if (numRows === 1) {
      return s;
  }
  const list = Array.from({
      length: minLen,
  });
  let goDown = false;
  let curRow = 0;
   for (let i = 0; i <= minLen - 1; i++) {
      list[i] = [];
  }
  for (let i = 0; i <= len - 1; i++) {
  // console.log('list', curRow, list[curRow], s[i]);

      list[curRow].push(s[i]);
      if (curRow === 0 || curRow === minLen - 1) {
          goDown = !goDown
      }
      curRow += goDown ? 1 : -1;
  }
  // console.log('list', list);
  const listLeng = list.length;
  let res = '';
  for (let i = 0; i <= listLeng - 1; i++) {
      res += list[i].join('');
  }
  // console.log('res', res)
  return res;
};
