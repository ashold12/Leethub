/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, accumulator = 0) {
    //assuming all distinct vals sorted array -> on pivot
    //nums = arr
    //target = value
    debugger;
    if (nums.length === 1) {
        if (nums[0] === target) return 0 + accumulator
        return -1
    }
    let midIndex = Math.floor((nums.length-1) / 2)
    if (nums[midIndex] === target) return midIndex + accumulator
    
    //mid is not the number split arrays and check which side contains
    let right = nums.splice(midIndex + 1, nums.length - 1)
    let rightAccum = accumulator + midIndex + 1
    let left = nums.splice(0, nums.length)
    let leftAccum = accumulator

    let newAccum;
    let keep; //array we are recursing as new half
 
    if (isSorted(right) && isSorted(left)) {
        if (inRange(right, target)) {
            keep = right
            newAccum = rightAccum
        } else if (inRange(left, target)) {
            keep = left
            newAccum = leftAccum
        } else {
            return -1
        }
    } else if (isSorted(right)){
        if (inRange(right, target)) {
            keep = right
            newAccum = rightAccum
        } else {
            keep = left
            newAccum = leftAccum
        }
    } else if (isSorted(left)) {
        if (inRange(left, target)) {
            keep = left
            newAccum = leftAccum
        } else {
            keep = right
            newAccum = rightAccum
        }
    }
    debugger;
    return search(keep, target, newAccum)
};

function isSorted(array) {
    //returns boolean is sorted
    if (array.length === 1) return true
    if (array[0] < array[array.length - 1]) return true
    return false
}
function inRange(array, target) {
    //assumes it is sorted
    if (target >= array[0] && target <= array[array.length-1]) return true
    return false
}