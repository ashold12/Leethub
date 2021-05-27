/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    //base case if no board
    if (!board.length) return board
    
    const getNeighbors = (r, c) => {
        let neighbors = [
                            [0, 1], [1, 0], [-1, 0], [0, -1],
                            [1, 1], [-1, 1], [1, -1], [-1, -1]
                        ]
        let vals = 0
        neighbors.forEach(neighbor => {
            let nC = neighbor[0] + c
            let nR = neighbor[1] + r
            if ((nR < 0 || nR > board.length - 1) || (nC < 0 || nC > board[0].length - 1)) return
            let val = board[nR][nC]
            if (val === 2 || val === 0) return
            vals++
            
        })
        return vals
    }
    
    //to solve in original board we must do 2 passes
    //use different numbers to represent current --> changed state on iteration
    // 0 -> dead, 1 ->alive, 2->dead become alive, 3->alive become dead
    
    //iterate through 2d matrix swapping vals
    for (let r = 0; r < board.length; r++){
        for (let c = 0; c < board[0].length; c++) {
            let neighbors = getNeighbors(r, c)
            let node = board[r][c]
            if (node === 1) {
                if (neighbors < 2 || neighbors > 3) board[r][c] = 3
                continue
            }
            // assume node === 0
            if (neighbors === 3) board[r][c] = 2
        }
    }
    
    //iterate again changing vals 2/3 to 1,0
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            let node = board[r][c]
            if (node === 2) board[r][c] = 1
            if (node === 3) board[r][c] = 0
        }
    }
};