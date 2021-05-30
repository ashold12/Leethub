/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*

var coinChange = function(coins, amount) {
    coins.sort().reverse()
    let minSolution = null; //define on first solve
    
    let makeSolutions = (totalCoins = 0, remaining = amount, index = 0) => {
        if (remaining < 1 || totalCoins === minSolution) {
            if (remaining === 0 && (totalCoins < minSolution || minSolution === null)) minSolution = totalCoins
            return
        }
        for (let i = index; i < coins.length; i++) {
            let current = coins[i]
            remaining -= current
            totalCoins++
            makeSolutions (totalCoins, remaining, i)
            remaining += current
            totalCoins--
        }
    }
    makeSolutions()
    if (minSolution !== null) return minSolution
    return -1
};

*/
var coinChange = function(coins, amount) {
    //create array representing all integer amounts to amount, index corresponds to amount
    let solutions = new Array(amount+1).fill(Infinity)
    solutions[0] = 0
    //iterate through array of coins
    coins.forEach(coin => {
        //start at coin amount, and generate solutions upto end of solutions array if solutions exist
        for (let x = coin; x <= amount; x++) {
            //if we are at amount, solutions[amount - thisCoin] + 1(for adding coin) is solution
            //if solution is not present this evaluates to infinity
            let solution = solutions[x-coin] + 1
            if (solution < solutions[x]) solutions[x] = solution
        }
    })
    if (solutions[amount] !== Infinity) return solutions[amount]
    return -1
}