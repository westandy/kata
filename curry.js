function leftCurryDiv(n) {
  return function(d) {
    return n / d;
  };
}

function rightCurryDiv(d) {
  return function(n) {
    return n / d;
  };
}

const divide10By = leftCurryDiv(10);
//console.log(divide10By(2));

const divideBy10 = rightCurryDiv(10);
//console.log(divideBy10(2));

function curry(func) {
  return function(arg) {
    return func(arg);
  };
}

// Using curry fixes the second argument of parseInt, which ends up being the base.
// So the indices become the 'bases' screwing up the logic.
//console.log(['11', '11', '11', '11'].map(parseInt));
//console.log(['11', '11', '11', '11'].map(curry(parseInt)));

function curry2(func) {
  return function(secondArg) {
    return function(firstArg) {
      return func(firstArg, secondArg);
    };
  };
}

function div(n, d) {
  return n / d;
}

const div10 = curry2(div)(10);
//console.log(div10(50));

const parseBinaryString = curry2(parseInt)(2);

//console.log(parseBinaryString('111'));
//console.log(parseBinaryString('10'));

const plays = [
  {artist: 'Burial', track: 'Archangel'},
  {artist: 'Ben Front', track: 'Stomp'},
  {artist: 'Burial', track: 'Archangel'},
  {artist: 'Ben Front', track: 'Stomp'},
  {artist: 'Burial', track: 'Archangel'},
  {artist: 'Emeralds', track: 'Snores'}
];

// Supposed to use countBy
const countBy = require('lodash.countby');
const countByTest = countBy(plays, function(song) {
  return [song.artist, song.track].join(' - ');
});
//console.log(countByTest);

function songToString(song) {
  return [song.artist, song.track].join(' - ');
}
const songCount = curry2(countBy)(songToString);
//console.log(songCount(plays));

function curry3(func) {
  return function(last) {
    return function(middle) {
      return function(first) {
        return func(first, middle, last);
      };
    };
  };
}

const uniq = require('lodash.uniq');
const songsPlayed = curry3(uniq)(false)(songToString);

// Fluent APIS
const greaterThan = curry2(function(lhs, rhs) {
  return lhs > rhs;
});
