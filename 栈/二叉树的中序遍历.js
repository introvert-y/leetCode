/**
 * 给定一个二叉树，返回它的中序遍历
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 先序遍历 根、左、右
 * 中序遍历 左、根、右
 * 后序遍历 左、右、根
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
 * @return {number[]}
 */

// 方法一： 递归
function recursive (root, list = []) {
  if (!root) {
    return [];
  }
  if(!!root.left) {
    recursive(root.left, list);
  }
  list.push(root.val);
  if(!!root.right) {
    recursive(root.right, list);
  }
  return list;
}
var inorderTraversal = function(root) {
  return recursive(root);
};

// 方法二： 迭代
var inorderTraversal = function(root) {
  const stack = [];
  const resList = [];
  while (root || stack.length) {
    while(root) {
      stack.push(root);
      root = root.left;
    }
    const item = stack.pop();
    resList.push(item.val);
    root = item.right;
  }
  return resList;
};
