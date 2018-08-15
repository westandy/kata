/**
Given a letter, print a diamond starting with 'A' with the supplied letter at the widest point.

For example: print-diamond 'C' prints

numRows => 2 * inputIdx + 1
...A...   -> idx 0 -> numCols 1 
..B.B..   -> idx 1 -> numCols 3
.C...C.   -> idx 2 -> numCols 5
D.....D . -> idx 3 -> numCols 7 => 2 * inputIdx + 1
.C...C.
..B.B..
...A...
 */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const DOT = ' ';

function* singleValueArrayGenerator(value, numElems) {
  let count = 0;
  while (count < numElems) {
    yield value;
    count++;
  }
}

const createRow = ({numCols, inputIdx, alphaIdx}) => {
  let row = [...singleValueArrayGenerator(DOT, numCols)];

  const outside = inputIdx - alphaIdx;
  const letter = alphabet[alphaIdx];
  row.splice(outside, 1, letter); // Letter on the left
  row.splice(numCols - 1 - outside, 1, letter); // Letter on the right

  return row;
};

// Can we turn this into a generator?
const makeDiamond = input => {
  const inputIdx = alphabet.findIndex(x => x === input);
  const numRows = 2 * inputIdx + 1;
  const numCols = 2 * inputIdx + 1;

  // Make the 'empty' diamond
  let diamond = [...singleValueArrayGenerator(DOT, numRows)];

  // Add Rows
  for (let ii = 0; ii <= inputIdx; ii++) {
    const row = createRow({
      numCols,
      inputIdx,
      alphaIdx: ii
    });
    diamond[ii] = row; // Top Row
    diamond[numRows - 1 - ii] = row; // Bottom Row
  }
  return diamond;
};

const printDiamond = (rows = []) => {
  rows.forEach(row => console.log(row.join('')));
};

// Output Execution
const input = 'v';
const rows = makeDiamond(input.toUpperCase());
printDiamond(rows);
