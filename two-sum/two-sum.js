/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) { //number[]
  let binSearch = (target, start = 0, arr= nums)=> {
    let startIndex = start
    let endIndex = arr.length - 1

    while (endIndex >= startIndex) {
      let midIndex = Math.floor((endIndex + startIndex) / 2)
      let mid = arr[midIndex][0]
      if (mid === target) return midIndex
      if (mid < target) {
        startIndex = midIndex + 1
        continue
      }
      endIndex = midIndex - 1
    }
    return false
  }
  //store original index as second parameter of the array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums[i], i]
  }
  nums.sort((a, b) => {
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    return 0
  })
  for (let i = 0; i < nums.length - 1; i++) {
    let val = nums[i][0]
    let searchFor = target - val
    let result = binSearch(searchFor, i + 1)
    if (typeof result === 'number') return [nums[i][1], nums[result][1]]
  }
  return []
};