/**
 * url: https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef?tpId=13&tqId=23450&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.13
 * 难度： 较难
 * */ 


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    if (pHead == null || pHead.next == null) {
        return pHead;
    }
    if (pHead.val === pHead.next.val) {
        let node = pHead.next;
        while(node && node.val === pHead.val) {
            node = node.next;
        }
        return deleteDuplication(node);
    } else {
        pHead.next = deleteDuplication(pHead.next);
        return pHead;
    }
}
module.exports = {
    deleteDuplication : deleteDuplication
};