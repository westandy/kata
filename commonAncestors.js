const input = [
  [11, 12],
  [11, 10],
  [10, 4],
  [10, 6],
  [6, 7],
  [6, 8],
  [4, 3],
  [1, 3],
  [3, 5]
];

/**
 * 
  {{ '3': [ 4, 1 ],
  '4': [ 10 ],
  '5': [ 3 ],
  '6': [ 10 ],
  '7': [ 6 ],
  '8': [ 6 ],
  '10': [ 11 ],
  '12': [ 11 ] }} 
 */
function getAncestors(table, child) {
  if (!table[child]) {
    return [];
  } else {
    const parents = table[child];
    const ancestors = parents.reduce(
      (accum, parent) => [...accum, ...getAncestors(table, parent)],
      []
    );
    return [...parents, ...ancestors];
  }
}

function hasInterception(leftList, rightList) {
  for (let ii = 0; ii < leftList.length; ii++) {
    if (rightList.includes(leftList[ii])) {
      return true;
    }
  }
  return false;
}

function findCommonAncestors(input, firstChild, secondChild) {
  const table = input.reduce((accum, pair) => {
    const [parent, child] = pair;
    if (accum[child]) {
      accum[child].push(parent);
    } else {
      accum[child] = [parent];
    }
    return accum;
  }, {});

  const firstAncestors = getAncestors(table, firstChild);
  const secondAncestors = getAncestors(table, secondChild);

  return hasInterception(firstAncestors, secondAncestors);
}

console.log(findCommonAncestors(input, 3, 12)); // true, 11
console.log(findCommonAncestors(input, 3, 6)); // true, 10
console.log(findCommonAncestors(input, 1, 8)); // false
