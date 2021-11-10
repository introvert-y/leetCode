/**
 * url: https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=23278&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.11
 * */ 
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 迭代
// function Merge(pHead1, pHead2)
// {
//   // write code here
//   let head = {
//     next: null,
//   };
//   let cur = head;
  
//  while(pHead1 && pHead2) {
//      if (pHead1.val <= pHead2.val) {
//          cur.next = pHead1;
//          pHead1 = pHead1.next;
//      } else {
//          cur.next = pHead2;
//          pHead2 = pHead2.next;
//      }
//      cur = cur.next;
//  }
//   cur.next = pHead1 || pHead2;
//   return head.next;
// }


// 递归
function Merge(pHead1, pHead2)
{
    // write code here
     if(!pHead1) {
         return pHead2;
     }
    if (!pHead2) {
        return pHead1;
    }
    if (pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2);
        return pHead1;
    } else {
        pHead2.next = Merge(pHead1, pHead2.next);
        return pHead2;
    }
}
module.exports = {
  Merge : Merge
};