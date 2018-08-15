/**
 * Adds a message to a validating function, called func.
 */
const validator = (message, func) => {
  const validingMethod = (...args) => func.apply(func, args);
  validingMethod['message'] = message;
  return validingMethod;
};

// Verify that a given object is indeed an object
const isObject = obj => typeof obj === 'object';

/**
 * Examples
 */
const zero = validator('cannot be zero', n => 0 === n);
const number = validator('arg must be a number', n => typeof n === 'number');
const sqr = n => {
  if (!number(n)) throw new Error(number.message);
  if (zero(n)) throw new Error(zero.message);

  return n * n;
};

console.log(sqr(10));
//sqr(0);
//sqr('');
