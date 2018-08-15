// Issue
function curry(func) {
  return function(arg) {
    return func(arg);
  };
}
console.log(['11', '11', '11', '11'].map(parseInt));
console.log(['11', '11', '11', '11'].map(curry(parseInt)));

// Using curry fixes the second argument of parseInt, which ends up being the base.
// So the indices become the 'bases' screwing up the logic.
//console.log(['11', '11', '11', '11'].map(parseInt));
//console.log(['11', '11', '11', '11'].map(curry(parseInt)));

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

const parseBinary = curry2(parseInt)(2);

console.log(parseBinary('111'));
console.log(parseBinary('10'));
