// 42. 接雨水
// 难度： 困难
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//   let res = 0;
//   if (!height.length) {
//     return 0;
//   }
//   const list = height.map(Number);
//   let i = list.findIndex(item => item > 0);
//   if (i < 0) {
//     return 0;
//   }
//   const length = list.length;
//   for (let i = 1; i < length; i++) {
//     let max_left = 0;
//     let max_right = 0;
//     for (let j = i; j >= 0; j--) {
//       max_left = Math.max(list[j], max_left);
//     }
    
//     for (let j = i; j < length; j++) {
//       max_right = Math.max(list[j], max_right);
//     }
//     res += Math.min(max_left, max_right) - list[i];
//   }
//   return res;
// };

[3]


var trap = function(height) {
  const stack = [];
  let res = 0;
  for(let i = 0; i < height.length; i++) {
    while (!stack.length && height[i] > height[stack[stack.length -1]]) {
      const item = stack.pop();
      if (!stack.length) {
        break;
      }
      const width = i - stack[stack.length -1] - 1;
      const height_border = Math.min(height[i], height[stack[stack.length -1]]) - height[item];
      console.log('width', width, height_border);
      res += width * height_border;
    }
    stack.push(i);
  }
  return res;
}
trap([0,1,0,2,1,0,1,3,2,1,2,1]);