/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //rotate series of cells starting from outside perimeter and working inward
    let row = 0 // 0,2,2,0 -> 0,1,2,1,0
    let col = 0 // 2,2,0,0 -> 1,2,1,1,1
    let perim = 0
    let stop = Math.floor(matrix.length/2)
    
    while (perim < stop) {
        for (let x = perim; x < matrix.length - 1 - perim; x++) {
            let storage = matrix[perim][x]
            //matrix[perim][x] //top
            //matrix[x][matrix.length - 1 - perim] //right
            //matrix[matrix.length - 1 - perim][matrix.length - 1 - x] //bot
            //matrix[matrix.length - 1 - x][perim] //left
            
            matrix[perim][x] = matrix[matrix.length - 1 - x][perim]      // top becomes left
            matrix[matrix.length - 1 - x][perim] = matrix[matrix.length - 1 - perim][matrix.length - 1 - x] //left  becomes bot ???? 
            matrix[matrix.length - 1 - perim][matrix.length - 1 - x] = matrix[x][matrix.length - 1 - perim]
            matrix[x][matrix.length - 1 - perim] = storage
        }
            
        perim++
    }
    return matrix
};