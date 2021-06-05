/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) { //number[]
    let dic = {} 
    for (let i = 0; i < nums.length; i++) {
        let search = target-nums[i]
        if (search in dic) return[dic[search], i]
        dic[nums[i]] = i
    }
    return []
};