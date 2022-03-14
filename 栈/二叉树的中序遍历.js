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
var inorderTraversal = function(root) {
  const list = [];
  circleQuery(root, list);
  return list;
};

var circleQuery = function (root, list = []) {
  if (!root) {
      return;
  }
  if (root.left) {
      circleQuery(root.left, list);
  }
  list.push(root.val);

  if (root.right) {
      circleQuery(root.right, list)
  }
}


// 方法二： 迭代
var inorderTraversal = function(root) {
  const list = [];
  circleQuery(root, list);
  return list;
};

var circleQuery = function (root, list = []) {
  if (!root) {
      return;
  }
  if (root.left) {
      circleQuery(root.left, list);
  }
  list.push(root.val);

  if (root.right) {
      circleQuery(root.right, list)
  }
}


// 方法三： 维护成个查找结构;
/**
 *
 * 复杂度分析
    时间复杂度：O(n)O(n)，其中 nn 为二叉搜索树的节点个数。Morris 遍历中每个节点会被访问两次，因此总时间复杂度为 O(2n)=O(n)O(2n)=O(n)。
    空间复杂度：O(1)O(1)

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  const res = [];
  let predecessor = null;
  while(root) {
      if (root.left) {
          predecessor = root.left;
          while(predecessor.right && predecessor.right != root) {
              predecessor = predecessor.right;
          }
          if (!predecessor.right) {
              predecessor.right = root;
              root = root.left;
          }
          // 已经遍历完左子树了
          else {
              res.push(root.val);
              predecessor.right = null;
              root = root.right;
          }
      }
      // 没有左孩子
      else {
          res.push(root.val);
          root = root.right;
      }
  }
  return res;
};

