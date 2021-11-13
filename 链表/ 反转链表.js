/**
 * url: https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&tqId=23286&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.9
 * 难度： 简单
 * */ 

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 1、暴力解法
// function generateNode(val) {
//   this.val = val;
//   this.next = null;
// }
// function ReverseList(pHead)
// {
//   // write code here
//   console.log('pHead', pHead);
//   if(!pHead) {
//       return null;
//   }
//   const list = [];
//   while(pHead) {
//       list.push(pHead.val);
//       pHead = pHead.next;
//   }
//   const head = new generateNode(list.pop())

//   while(list.length) {;
//       const popItem = list.shift();
//       const item = new generateNode(popItem);
//       item.next = head.next;
//       head.next = item;
//   }
//   return head;
// }

// 2.正规解法
/**
 * 
 * 。此题想考察的是：如何调整链表指针，来达到反转链表的目的。
    初始化：3个指针
    1）pre指针指向已经反转好的链表的最后一个节点，最开始没有反转，所以指向nullptr
    2）cur指针指向待反转链表的第一个节点，最开始第一个节点待反转，所以指向head
    3）nex指针指向待反转链表的第二个节点，目的是保存链表，因为cur改变指向后，后面的链表则失效了，所以需要保存
    接下来，循环执行以下三个操作
    1）nex = cur->next, 保存作用
    2）cur->next = pre 未反转链表的第一个节点的下个指针指向已反转链表的最后一个节点
    3）pre = cur， cur = nex; 指针后移，操作下一个未反转链表的第一个节点
    循环条件，当然是cur != nullptr
    循环结束后，cur当然为nullptr，所以返回pre，即为反转后的头结点
 */
function ReverseList(pHead)
{
    // write code here
    if(!pHead) {
        return null;
    }
    let pre = null;
    let cur = pHead;
    let nex = null;
    while(cur) {
        nex = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nex;   
    }
    return pre;
}
module.exports = {
  ReverseList : ReverseList
};