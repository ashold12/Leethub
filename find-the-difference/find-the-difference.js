/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sDic = {}
    let tDic = {}
    
    for (let char of s) {
        if (char in sDic) {
            sDic[char]++
            continue
        }
        sDic[char] = 1
    }
    for (let char of t) {
        if (char in tDic) {
            tDic[char]++
        } else {
            tDic[char] = 1
        }
        if (!sDic[char] || sDic[char] < tDic[char]) {
            return char
        }
    }
    return -1
};