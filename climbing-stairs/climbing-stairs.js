/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    let memo = {0:0, 1:1, 2:2, 3:3}
    let inner = (remaining) => {
        if (memo[remaining]) return memo[remaining]
        memo[remaining] = inner(remaining - 1) + inner(remaining - 2)
        return memo[remaining]
    }
    return inner(n)
};


