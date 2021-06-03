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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val)
    let node = root
    let prev;
    while (node !== null) {
        if (val < node.val) {
            if (!node.left) {
                node.left = new TreeNode(val)
                break
            }
            node = node.left
            continue
        }
        if (!node.right) {
            node.right = new TreeNode(val)
            break
        }
        node = node.right
    }
        
    return root
    
};