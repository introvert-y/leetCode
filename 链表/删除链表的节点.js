/**
 * url: https://www.nowcoder.com/practice/f9f78ca89ad643c99701a7142bd59f5d?tpId=13&tqId=2273171&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.13
 * 难度： 简单
 * */ 

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param head ListNode类 
 * @param val int整型 
 * @return ListNode类
 */
 function generateNode (x) {
  this.val = x;
  this.next = null;
}
function deleteNode( head ,  val ) {
  // write code here
  const res = head;
  if (head.val === val) {
      return head.next;
  }
  while(head.next.val !== val) {
      head = head.next;
  }
  head.next = head.next.next;
  return res;
}
module.exports = {
  deleteNode : deleteNode
};