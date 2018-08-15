const zip = require('lodash.zip');

function myLength(array) {
  if (array === undefined || array === null || array.length == 0) {
    return 0;
  } else return 1 + myLength(array.slice(1));
}
//console.log(myLength([4, 5, 'a', 'b', 'c']));

function cycle(times, array) {
  if (times <= 0) return [];
  else return array.concat(cycle(times - 1, array));
}

//console.log(cycle(2, [1, 2, 3]));

function constructPair(pair, rests) {
  const first = {[pair[0]]: rests[0]};
  const second = {[pair[1]]: rests[1]};
  return [].concat(first, second);
}

console.log(constructPair(['a', 1], [[], []]));

console.log(zip(['a'], [1]));

console.log(zip.apply(null, constructPair(['a', 1], [[], []])));
