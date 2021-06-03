/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //length 1 or 0
    if (!head || head.val === undefined || !head.next) return head
    //get length and link last node to head
    let node = head
    let length = 1
    
    while (node.next) {
        node = node.next
        length++
    }
    //complete links and find out true k value
    if (!k%length) return head
    k = k%length
    node.next = head
    node = head
    
    //iterate until we find new tail, which comes before new head
    for (let i = 1; i < length - k; i++) {
        node = node.next
    }
    console.log(node.val)
    let newHead = node.next
    node.next = null
    return newHead
    
};