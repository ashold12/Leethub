/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    debugger;
    nums.reduce((previous, accum, index) => {
        result[index] = previous;
        return previous * accum
    }, 1)
    
    nums.reduceRight((previous, accum, index) => {
        result[index]  *= previous
        return previous * accum
    }, 1);
    return result
};