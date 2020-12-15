/**
 * 
题目描述
  输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为
  该栈的弹出顺序。假设压入栈的所有数字均不相等。
  例如序列1,2,3,4,5是某栈的压入顺序，
  序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
  但4,3,5,1,2就不可能是该压栈序列的弹出序列。
  （注意：这两个序列的长度是相等的）
  求解思路：相当于求某个栈的多种弹出顺序中，符合条件那一个
  https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106?tpId=13&&tqId=11174&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 */
function IsPopOrder(pushV, popV) {
  // write code here
  const stack = [];
  let j = 0;
  const len = pushV.length;
  for (let i = 0; i < len; i++) {
      stack.push(pushV[i]);
      while(stack.length && stack[stack.length - 1] === popV[j]) {
        stack.pop();
        j++;
      }
  }
  return !stack.length;
}

// 优化存储空间
function IsPopOrder(pushV, popV) {
    // write code here
    const stack = [];
    let i = 0;
    let j = 0;
    const len = pushV.length;
    while (i < len) {
      if (pushV[i] !== popV[j]) {
          stack.push(pushV[i]);
          i++;
      } else {
          i++;
          j++;
          while(stack.length && stack[stack.length - 1] === popV[j]) {
              stack.pop();
              j++;
          }
      }        
    }
    return !stack.length;
}