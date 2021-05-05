/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    while (curr != null ) {
        // next becomes previous (initialized as null at head)
        // previous becomes current
        // current becomes next
        
        // let nextStorage = curr.next
        // curr.next = prev
        // prev = curr
        // curr = nextStorage
        [curr.next, prev, curr] = [prev, curr, curr.next]
    }
    return prev
};