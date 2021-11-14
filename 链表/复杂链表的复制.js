/**
 * url: https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba?tpId=13&tqId=23254&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.13
 * 难度： 较难
 * */ 

 function RandomListNode(x){
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead)
{
  // write code here
  if (!pHead) {
      return null;
  }
  let currentNode = pHead;
  while (currentNode) {
      const cloneNode = new RandomListNode(currentNode.label);
      const nextNode = currentNode.next;
      cloneNode.next = nextNode;
      cloneNode.random = currentNode.random == null ?  null: currentNode.random;
      currentNode.next = cloneNode;
      currentNode = nextNode;
  }
  console.log('pHead', pHead)
  currentNode = pHead;
      const head = pHead.next;

  while(currentNode) {
      const cloneNode = currentNode.next;
      currentNode.next = cloneNode.next;
      cloneNode.next = cloneNode.next === null ? null : cloneNode.next.next;
      currentNode = currentNode.next;
  }
  return head;
}
module.exports = {
  Clone : Clone
};