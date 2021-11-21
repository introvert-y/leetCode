/**
 * url: https://leetcode-cn.com/problems/minimum-window-substring/
 * finish date: 2021.11.21
 * 难度： 困难
 * */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  let distance = 0;
  let left = 0;
  let right = 0;
  let minLen = sLen + 1;
  let begin = 0;
  const tListFrequency = Array.from({
    length: 128,
  }).fill(0);
  const cListFrequency = Array.from({
    length: 128,
  }).fill(0);
  for (let i = 0; i <= tLen - 1; i++) {
    tListFrequency[t.charCodeAt(i)] += 1;
  }
  // console.log('tListFrequency', tListFrequency)
  while (right <= sLen - 1) {
    const rightItem = s.charCodeAt(right);
    // console.log('cur', rightItem , cListFrequency[rightItem], tListFrequency[rightItem])
    if (cListFrequency[rightItem] < tListFrequency[rightItem]) {
      distance++;
    }
    cListFrequency[rightItem]++;
    right++;
    while (distance === tLen) {
      const leftItem = s.charCodeAt(left);
      if (right - left < minLen) {
        minLen = right - left;
        begin = left;
        console.log(`minLen: ${minLen}  begin: ${begin}`);
      }
      if (cListFrequency[leftItem] === tListFrequency[leftItem]) {
        distance--;
      }
      cListFrequency[leftItem]--;
      left++;
    }
  }
  if (sLen + 1 === minLen) {
    return "";
  }
  return s.substring(begin, begin + minLen);
};

var minWindow = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  let distance = tLen;
  let left = 0;
  let right = 0;
  let minLen = sLen + 1;
  let begin = 0;
  const tListFrequency = Array.from({
    length: 128,
  }).fill(0);
  for (let i = 0; i <= tLen - 1; i++) {
    tListFrequency[t.charCodeAt(i)] += 1;
  }
  while (right <= sLen - 1) {
    const rightItem = s.charCodeAt(right);
    if (tListFrequency[rightItem] > 0) {
      distance--;
    }
    tListFrequency[rightItem]--;
    right++;
    while (distance === 0) {
      const leftItem = s.charCodeAt(left);
      if (right - left < minLen) {
        minLen = right - left;
        begin = left;
        // console.log(`minLen: ${minLen}  begin: ${begin}`);
      }
      if (tListFrequency[leftItem] === 0) {
        distance++;
      }
      tListFrequency[leftItem]++;
      left++;
    }
  }
  if (sLen + 1 === minLen) {
    return "";
  }
  return s.substring(begin, begin + minLen);
};
