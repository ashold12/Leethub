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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = []
    
    let DFS = (node, path = '') => {
        if (!node || !node.val) return
        !path.length ? path += node.val : path += `->${node.val}`
        if (!node.right && !node.left) {
            result.push(path)
            return
        }
        DFS(node.right, path)
        DFS(node.left, path)
    }
    DFS(root)
    
    return result
};