/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortAscending = (a, b) => a - b
    nums.sort(sortAscending)
    for (let x = 0; x < nums.length; x++) {
        if ( x !== nums[x] ) return x
    }
    return nums.length
};