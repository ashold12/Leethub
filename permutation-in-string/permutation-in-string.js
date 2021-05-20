/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) return false
    let s1Dic = {}
    let s2Dic = {}
    
    //initialize s1 dictionary as it never changes
    for (let char of s1) {
        if (char in s1Dic) {
            s1Dic[char]++
            continue
        }
        s1Dic[char] = 1
    }
    
    //initialize s2 dictionary
    //s2 dic starts at 0 index and goes to s1.length
    for (let x = 0; x < s1.length; x++) {
        let char = s2[x]
        if (char in s2Dic) {
            s2Dic[char]++
            continue
        }
        s2Dic[char] = 1
    }
    
    let dicsEqual = () => {
        for (let key in s1Dic) {
            if (s2Dic[key] !== s1Dic[key]) return false
        }
        return true
    }
    
    //advance until 2nd pointer is outside s2.length 
    //advance by adding dic[char]++ at end pointer
    //decrement dic at last first pointer - 1
    let start = 0
    let end = s1.length-1
    
    while (end < s2.length) {
        if (dicsEqual()) return true
        s2Dic[s2[start]]--
        start++
        end++
        let newChar = s2[end]
        if (newChar in s2Dic) s2Dic[newChar]++
        else s2Dic[newChar] = 1
    }
    
    return false
};