/**
 * url: https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=23278&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * finish date: 2021.11.8
 * */ 

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 1、暴力解法
// function printListFromTailToHead(head)
// {
//     // write code here
//     if (!head) {
//         return [];
//     }
//     const list = [];
//     while(head) {
//         list.push(head.val);
//         head = head.next;
//     }
//     return list.reverse();
// }

// 2、栈的先进后出
// function printListFromTailToHead(head)
// {
//     // write code here
//     if (!head) {
//         return [];
//     }
//     const list = [];
//     while(head) {
//         list.push(head.val);
//         head = head.next;
//     }
//     const list2 = [];
//     while(list.length) {
//         list2.push(list.pop());
//     }
//     return list2; 
// }

// 3、递归
const list = [];
function printListFromTailToHead(head)
{
    // write code here
    if (!head) {
        return list;
    } 
    if (head.next) {
        printListFromTailToHead(head.next);
    }
    list.push(head.val);
    if (!head.next) {
        return [];
    }
    return list;
    
    
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};