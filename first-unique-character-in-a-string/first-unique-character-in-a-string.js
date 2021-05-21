/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   let dic = {}
   for (let char of s) {
       if (dic[char]) {
           dic[char]++
           continue
       }
       dic[char] = 1
   }
   for (let i = 0; i < s.length; i++) {
       if (dic[s[i]] === 1) return i
   }
   return -1
};