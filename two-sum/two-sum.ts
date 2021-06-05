function twoSum(nums: number[], target: number): number[] { //number[]
    let dic = {} 
    for (let i = 0; i < nums.length; i++) {
        let search = target-nums[i]
        if (search in dic) return[dic[search], i]
        dic[nums[i]] = i
    }
    return []
};