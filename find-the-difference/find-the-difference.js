/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  let sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return String.fromCharCode(sum2 - sum1);
    
};