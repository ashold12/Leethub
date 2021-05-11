/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //set flags for row/col
    //0,0 position stores flag for first row zeroes
    //below variable stores flag for first column zeroes
    let firstColZero = false
    matrix.forEach((row, rowIndex) => {
      if (row[0] === 0) {
          firstColZero = true
      }
      row.forEach((colItem, colIndex) => {
        if (colIndex === 0) return
        if (colItem === 0) {
            matrix[0][colIndex] = 0
            matrix[rowIndex][0] = 0
        }  
      })
    })
    //handle rows not counting first
    for (let x = 1; x < matrix.length; x++) {
        if (matrix[x][0] === 0) {
            matrix[x].fill(0)
        }
    }
    //handle columns not counting first
    for (let x = 1; x < matrix[0].length; x++) {
        if (matrix[0][x] === 0) {
            for (let y = 1; y < matrix.length; y++) {
                matrix[y][x] = 0
            }
        }
    }
    //finally check starter row/col
    if (matrix[0][0] === 0) {
        matrix[0].fill(0)
    }
    if (firstColZero) {
        matrix.forEach((row, rowIndex) => {
          matrix[rowIndex][0] = 0  
        })
    }
    
};