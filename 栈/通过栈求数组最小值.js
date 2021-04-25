/**
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 方法一 两个数组分别维护
function MinStack() {
  this.list = [];
  this.minList = [];
}
MinStack.prototype.push = function (element) {
  this.list.push(element);
  if (
    !this.minList.length ||
    element <= this.minList[this.minList.length - 1]
  ) {
    this.minList.push(element);
  }
};
MinStack.prototype.pop = function () {
  const item = this.list.pop();
  if (item === this.minList[this.minList.length - 1]) {
    this.minList.pop();
  }
  return item;
};
MinStack.prototype.top = function () {
  return this.list[this.list.length - 1];
};
MinStack.prototype.getMin = function () {
  return this.minList[this.minList.length - 1];
};

// 方法二，当入栈比之前更小值的时候，先把之前的最小值入栈
// function MinStack() {
//   this.list = [];
//   this.minVal = '';
// }
// MinStack.prototype.push = function (element) {
//   if (!this.list.length) {
//     this.minVal = element;
//   } else if (element <= this.minVal) {
//     this.list.push(this.minVal);
//     this.minVal = element;
//   }
//   this.list.push(element);
// };
// MinStack.prototype.pop = function () {
//   const item = this.list.pop();
//   if (item === this.minVal && this.list.length) {
//     this.minVal = this.list.pop();
//   }
//   return item;
// };
// MinStack.prototype.top = function () {
//   return this.list[this.list.length - 1];
// };
// MinStack.prototype.getMin = function () {
//   return this.minVal;
// };

// 方法三：链表实现
// function Node(x = null, min = Infinity) {
//   this.value = x;
//   this.min = min;
//   this.next = null;
// }
// function MinStack() {
//   this.header = new Node();
// }
// MinStack.prototype.push = function (element) {
//   const n =
//     null === this.header.next
//       ? new Node(element, element)
//       : new Node(element, Math.min(element, this.header.min));
//   n.next = this.header;
//   this.header = n;
//   return n;
// };
// MinStack.prototype.pop = function () {
//   if (this.header.next === null) {
//     return false;
//   }
//   this.header = this.header.next;
//   return this.header;
// };
// MinStack.prototype.top = function () {
//   return this.header.next === null ? false : this.header.value;
// };
// MinStack.prototype.getMin = function () {
//   return this.header.min;
// };
