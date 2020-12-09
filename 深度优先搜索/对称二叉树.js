/**
 * 101. 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 * https://leetcode-cn.com/problems/symmetric-tree/
 */

// 递归
// function check(p, q) {
//   if (!p && !q) {
//      return true;
//   }
//   if (!p || !q) {
//     return false;
//   }
//   return (p.val === q.val) && check(p.left, q.right) && check(p.right, q.left);
// }

// 迭代
function check(obj1, obj2) {
  const q = [];
  q.push(obj1);
  q.push(obj2);
  while (q.length) {
     const u = q.pop();
     const v = q.pop();
      if (!u && !v) {
          continue;
      }
      if ((!u || !v) || (u.val !== v.val)) {
          return false;
      }

      q.push(u.left);
      q.push(v.right);

      q.push(u.right);
      q.push(v.left);
  }
  return true;
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return check(root, root);
};

console.log(isSymmetric({
  val: 1,
  left: {
    val: 2,
    left: {
      val: null,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 2,
    left: {
      val: null,
    },
    right: {
      val: 3,
    },
  },
}))