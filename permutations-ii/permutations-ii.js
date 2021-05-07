/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 1) return [nums]
    if (!Array.isArray(nums)) return
    let results = []
    
    let inner = (current, remaining) => {
        if (!remaining.length) {
            results.push([...current])
        }
        let checked = {}
        remaining.forEach((value, index) => {
            if (checked[value]) return
            checked[value] = true
            remaining.splice(index, 1)
            current.push(value)
            inner(current, remaining)
            checked[value] = true
            current.pop()
            remaining.splice(index, 0, value)
        })
    }
    inner([], nums)
    return results
};