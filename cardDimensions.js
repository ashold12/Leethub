
let exampleD = {
  '145x24': 2,
  '30x30': 1,
  '50x10': 3,
}
let exampleC = {
 '10x10':6
}
/*
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
for (let x = 0; x < possibleScraps.length; x++) {
  for (let y = 0; y < possibleScraps[x].length; y++) {
    let scrap = possibleScraps[x][y]
    possibleScraps[x][y] = scrap.join('x')
  }
}
return possibleScraps
}

///////////////////////////////////////////////////////////////////

let main = (cardDimensions, sheetSize) => {
let minSheets;
debugger;
let inner = (cardDimensions, sheets = 0, scraps = []) => {
  debugger;
  if (Object.keys(cardDimensions).length === 0) {
    if (minSheets === undefined || minSheets > sheets) {
      minSheets = sheets
      return
    }
  }
  for (let dimension in cardDimensions) {
    //handle the removal of the card from set first
    if (cardDimensions[dimension] > 1) {
      cardDimensions[dimension]--
    }
    else delete cardDimensions[dimension]
    let possible = false
    for (let z = 0; z < scraps.length; z++) {
      let scrap = scraps[z]
      //remove scrap from working set after including remainders
      possible = generateScraps(dimension, scrap)
      if (possible) {
        debugger
        let shallow = [...scraps]
        shallow.splice(z, 1)
        possible.forEach((possibleSet) => {
        inner(cardDimensions, sheets, [...shallow, ...possibleSet])
        })
      }
    }
    if (!possible) {
      let newSheetSolutions = generateScraps(dimension, sheetSize)
      debugger;
      newSheetSolutions.forEach((solution) => {
        inner(cardDimensions, sheets + 1, [...scraps, ...solution])
      })
    }
    //backtrack
    if (cardDimensions[dimension]) {
      cardDimensions[dimension]++
    } else {
      cardDimensions[dimension] = 1
    }
  }
}
inner(cardDimensions)
return minSheets
}