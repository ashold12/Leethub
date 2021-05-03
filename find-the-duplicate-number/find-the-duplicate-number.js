/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let dic = {}
    for (num of nums) {
        if (num in dic) return num
        dic[num] = 1
    }
    return null
};