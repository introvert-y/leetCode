/**
 * url: https://www.nowcoder.com/practice/886370fe658f41b498d40fb34ae76ff9?tpId=13&tqId=1377477&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.13
 * 难度： 简单
 * */ 


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */

 function getLenth(pHead) {
  let count = 0;
  while (pHead) {
      pHead = pHead.next;
      count++;
  }
  return count;
}
function getDetNode(pHead, dep) {
  while (dep > 0) {
      pHead = pHead.next;
      dep--;
  }
  return pHead;
} 
function FindKthToTail( pHead ,  k ) {
  // write code here
  if (!pHead) {
      return null;
  }
  const length = getLenth(pHead);
  if (k > length) {
      return null;
  }
  return getDetNode(pHead, length - k);
}

module.exports = {
  FindKthToTail : FindKthToTail
};