/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let charIndex = 0
    let char = chars[charIndex]
    for (let i = 1; i <= chars.length; i++) {
        let current = chars[i]
        if (char === current && i !== chars.length) continue
        
        //if char is new 
        let count = i - charIndex
        if (count > 1) {
            let s = count.toString().split('')
            chars.splice(charIndex + 1, count - 1, ...s)
            i = i - ( count - 2 )
        }
        charIndex = i
        char = chars[i]
    }
    
    return chars.length
};