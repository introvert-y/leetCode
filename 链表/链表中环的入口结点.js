/**
 * url: https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4?tpId=13&tqId=23449&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.13
 * 难度： 简单
 * */ 

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 1、hash
// function EntryNodeOfLoop(pHead)
// {
//     // write code here
//     const obj = {};
//     while(pHead) {
//         if (obj[pHead.val]) {
//             return pHead;
//         } 
//         obj[pHead.val] = true;
//         pHead = pHead.next;
//     }
//     return null;
// }

// 快慢指针
function EntryNodeOfLoop(pHead)
{
    // write code here
    let fast = pHead;
    let slow = pHead;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if ((fast && slow) && fast.val === slow.val) {
            break;
        }

    }
    if (!fast || !fast.next) {
        return null;
    }
    fast = pHead;
    while(fast.val !==  slow.val) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
    
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};