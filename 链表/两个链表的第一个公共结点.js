/**
 * url: https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46?tpId=13&tqId=23257&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.12
 * */ 


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function findListLength(head) {
  let count = 0;
  while(head) {
      count++;
      head = head.next;
  }
  return count;
}
function dep2Head(head, dep) {
  
  while(dep > 0) {
      head = head.next;
      dep--;
      
  }
  return head;
}
function FindFirstCommonNode(pHead1, pHead2)
{
  // write code here
  let length1 = findListLength(pHead1);
  let length2 = findListLength(pHead2);
  console.log('length1', length1, length2)
  let curHead = null;
  if (length1 > length2) {
      pHead1 = dep2Head(pHead1, length1 - length2);

  } else if (length1 < length2) {
      pHead2 = dep2Head(pHead2, length2 - length1);
  }
     while(pHead1 && pHead2) {
          if (pHead1.val == pHead2.val) {
              return pHead1;
          }
           pHead2 = pHead2.next;
          pHead1 = pHead1.next;
      }
  return null;
  
  
}
module.exports = {
  FindFirstCommonNode : FindFirstCommonNode
};