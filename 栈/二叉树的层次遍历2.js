
/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 
 * （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *  例如：给定二叉树 [3,9,20,null,null,15,7]
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// var levelOrderBottom = function(root) {
//   if(!root) {
//     return [];
//   }
//   let list = [root];
//   const res = [];
//   while(list.length) {
//     const currentLevelDotList = [];
//     const currentLevelValList = [];
//      while(list.length) {
//       const item = list.shift();
//       currentLevelValList.push(item.val);
//       if (item.left) {
//           currentLevelDotList.push(item.left);
//       }
//       if (item.right) {
//           currentLevelDotList.push(item.right);
//       }
//     }
//     list = currentLevelDotList;
//     res.push(currentLevelValList);
//   }
//   return res.reverse();
// };

var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  };
  let list = [root];
  const res = [];
  while(list.length) {
    const currentLevelDotList = [];
    const currentLevelValList = [];
    while(list.length) {
      const item = list.shift();
      currentLevelValList.push(item.val);
      if (item.left) {
        currentLevelDotList.push(item.left);
      }
      if (item.right) {
        currentLevelDotList.push(item.right);
      }
    }
    list = currentLevelDotList;
    res.push(currentLevelValList);
  }
  return res.reverse();
}