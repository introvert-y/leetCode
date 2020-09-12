// 给定一个二叉树，返回它的中序遍历。 左中右
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 方法一： 递归

// function recursive (root, list = []) {
//   if (!root) {
//     return [];
//   }
//   if(!!root.left) {
//     recursive(root.left, list);
//   }
//   list.push(root.val);
//   if(!!root.right) {
//     recursive(root.right, list);
//   }
//   return list;
// }
// var inorderTraversal = function(root) {
//   return recursive(root);
// };
