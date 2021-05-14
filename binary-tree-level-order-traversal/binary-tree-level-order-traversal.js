/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = []
    let result = []
    if(root) queue.push(root)
    
    while(queue.length) {
        let len = queue.length
        let breadth = []
        for (let x=0; x<len; x++) {
            breadth.push(queue[0].val)
            if (queue[0].left) queue.push(queue[0].left)
            if (queue[0].right) queue.push(queue[0].right)
            queue.shift()
        }
        if (breadth.length) result.push(breadth)
    }
    return result
}
    
    
    