const invoker = require('./invoker').default;
const always = require('./always').default;

const dispatch = (...funcs) => (target, ...args) =>
  funcs.map(func => func.apply(func, [target, ...args])).find(x => x != undefined);

/**
 * Use dispatch to create a function that turns
 * strings and arrays into strings
 */
const toString = dispatch(
  invoker('toString', Array.prototype.toString),
  invoker('toString', String.prototype.toString)
);

//console.log(toString('a'));
//console.log(toString('abcdefg'));
//console.log(toString([1, 2, 3, 4]));

/**
 * Use dispatch to create a string reversing function
 * for strings and arrays
 */
const homeGrownStringReverse = str =>
  typeof str == 'string'
    ? str
        .split('')
        .reverse()
        .join('')
    : undefined;
//console.log(homeGrownStringReverse('12345'));
// 54321

const reverse = dispatch(invoker('reverse', Array.prototype.reverse), homeGrownStringReverse);

//console.log(reverse([3, 2, 1]));
//console.log(reverse('abc'));

const sillyReverse = dispatch(reverse, always(42));
console.log(sillyReverse([1, 2, 3]));
console.log(sillyReverse('abc'));
console.log(sillyReverse(10000));

module.exports.default = dispatch;

// All switch statements in reducers could be replaced with this method
function isa(type, action) {
  return function(obj) {
    if (type === obj.type) {
      return action(obj);
    }
  };
}

function notify(message) {
  console.log(message);
}
function changeView(target) {
  console.log('target:', target);
}

const performCommand = dispatch(
  isa('notify', function(obj) {
    return notify(obj.message);
  }),
  isa('join', function(obj) {
    return changeView(obj.target);
  }),
  function(obj) {
    alert(obj.type);
  }
);
