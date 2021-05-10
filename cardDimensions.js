/*
  example input = {
    '145x24': 2
    '30x30': 20
    '50x10': 3
  }

let sheet size = ?any dimension?
*/

//ex cardDimensions = [3,4] sourceDimensions = [12,6]
//as tuples or 'NumxNum' string dimensions

/*
possibleScraps =
  [
    [ [12, 3], [8, 3] ],
    [ [8, 6], [4, 3] ],
    [ [12, 2], [9, 4] ],
    [ [9, 6], [3, 2] ]
  ]
*/

let generateScraps = (cardDimensions, sourceDimensions) => {
  //output an array containing all scrap solutions (for double rectangle inputs max length === 4)
  //make IF check to see if card can be cut from source, ideally perform this check outside the function call
  let possibleScraps = []

  sourceDimensions = sourceDimensions.split('x')
  cardDimensions = cardDimensions.split('x')

  let [xSource, ySource] = [...sourceDimensions]
  let [xCard, yCard] = [...cardDimensions]

  possibleScraps.push([[+xSource, ySource - yCard], [xSource - xCard, +yCard]])
  possibleScraps.push([[xSource - xCard, +ySource], [+xCard, ySource - yCard]])
  // flip card for next cuts
  possibleScraps.push([[+xSource, ySource - xCard], [xSource - yCard, +xCard]])
  possibleScraps.push([[xSource - yCard, +ySource], [+yCard, ySource - xCard]])

  return possibleScraps
}