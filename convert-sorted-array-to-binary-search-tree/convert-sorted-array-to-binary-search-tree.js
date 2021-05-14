/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(!nums.length) return null;
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode();
  root.val = nums.splice(mid,1)
  root.left = sortedArrayToBST(nums.slice(0,mid));
  root.right = sortedArrayToBST(nums.slice(mid, nums.length));
  return root;
};