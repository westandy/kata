// function divideBy(d) {
//   return function(n) {
//     return n / d;
//   };
// }
// const divideBy10 = divideBy(10);
// const answer = divideBy10(20);
// console.log(answer); // 2

function curry(func) {
  return function(secondArg) {
    return function(firstArg) {
      return func(firstArg, secondArg);
    };
  };
}

function divideNByD(n, d) {
  return n / d;
}

const divideBy10 = curry(divideNByD)(10);
const answer = divideBy10(20);
console.log(answer);
