/**
 * Generically check if an array of anything is valid
 * @param {*} args
 */
const checker = (...validators) => obj =>
  validators.reduce((errs, check) => (check(obj) ? errs : [...errs, check.message]), []);

const always = value => () => value;

// Example 1
const alwaysPasses = checker(always(true), always(true));

// Example 2
const fails = always(false);
fails.message = 'a failure in life';
const alwaysFails = checker(fails);

/**
 * Adds a message to a validating function, called func.
 */
const validator = (message, func) => {
  const validingMethod = (...args) => func.apply(func, args);
  validingMethod['message'] = message;
  return validingMethod;
};

// Example
const gonnaFail = checker(validator('ZOMG!', always(false)));
//console.log(gonnaFail(100));

// Verify that a given object is indeed an object
const isObject = obj => typeof obj === 'object';

const hasKeys = (...keys) => {
  const func = obj => keys.map(key => obj.hasOwnProperty(key));

  func['message'] = ['Must have values for keys'].concat(keys).join(' ');
  return func;
};

const hasMsgType = hasKeys('msg', 'type');
// Example
//console.log(hasMsgType({msg: 'blah', type: 'display'}));

const checkCommand = checker(validator('must be a map', isObject), hasKeys('msg', 'type'));

// Example
console.log(checkCommand({msg: 'blah', type: 'display'}));
console.log(checkCommand(32));
console.log(checkCommand({}));
