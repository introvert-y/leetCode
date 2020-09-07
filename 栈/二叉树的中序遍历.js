// 给定一个二叉树，返回它的中序 遍历。
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

// 方法二： 颜色标记法

var inorderTraversal = function(root) {
  const WHITE = 0;
  const GRAY = 1;
  const list = [[WHITE, root]];
  const res = [];
  while(list.length) {
    const [color, node] = list.pop();
    if (node) {      
      if (color == WHITE) {
        list.push([WHITE, node.right])
        list.push([GRAY, node])
        list.push([WHITE, node.left])
      }
      else {
        res.push(node.val);
      }
    }
  }
  return res;
};

