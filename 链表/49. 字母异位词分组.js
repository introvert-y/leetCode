/**
 * url: https://leetcode-cn.com/problems/group-anagrams/
 * finish date: 2021.11.20
 * 难度： 中等
 * */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
      let list = Array.from(str);
      list.sort();
      const key = list.toString();
      const saveList = map.get(key) || [];
      saveList.push(str);
      map.set(key, saveList);
  }
  return Array.from(map.values());
};