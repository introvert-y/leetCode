

/**
 * @param {TreeNode} root
 * @return {number}
 */

 // 深度优先递归
// var maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   } else {
//       const leftHeight = maxDepth(root.left);
//       const rightHeight = maxDepth(root.right);
//       return !root ? 0 :Math.max(leftHeight, rightHeight) + 1;
//   }
// };

// 广度优先
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  const list = [];
  list.push(root);
  let ans = 0;
  while (list.length) {
    let size = list.length;
    while (size > 0) {
        const node = list.pop();
        if (node.left) {
            list.push(node.left);
        }
        if (node.rightl) {
          list.push(node.right);
        }
        size--;
    }
    ans++;
  }
  return ans;
}

console.log(maxDepth({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 5,
    },
  }
}))