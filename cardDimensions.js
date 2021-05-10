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
  //check if solutions are possible return null otherwise
  if ((+xCard > +xSource && +xCard > +ySource) || (+yCard > +ySource && +yCard > +xSource)) {
    return null
  }

  possibleScraps.push([[+xSource, ySource - yCard], [xSource - xCard, +yCard]])
  if (xSource !== ySource) {
    possibleScraps.push([[+xCard, ySource - yCard], [xSource - xCard, +ySource]])
  }
  //flip card for next cuts
  if (xCard !== yCard) {
    possibleScraps.push([[+xSource, ySource - xCard], [xSource - yCard, +xCard]])
    if (xSource !== ySource) {
      possibleScraps.push([[xSource - yCard, +ySource], [+yCard, ySource - xCard]])
    }
  }


  for (let scrapsIndex = 0; scrapsIndex < possibleScraps.length; scrapsIndex++) {
    let scraps = possibleScraps[scrapsIndex];
    for (let entryIndex = 0; entryIndex < scraps.length; entryIndex++) {
      let entry = scraps[entryIndex]
      if (entry[0] === 0 || entry[1] === 0) {
        scraps.splice(entryIndex, 1)
        entryIndex --
      }
      if (entry[0] < 0 || entry[1] < 0) {
        possibleScraps.splice(scrapsIndex, 1)
        scrapsIndex--
      }
    }
  }

  return possibleScraps
}