/**
 * Usage:
 *  const reverse = invoker('reverse', Array.prototype.reverse);
 *  console.log(reverse([3,2,1]));
 *  // [1,2,3]
 */

const invoker = (name, method) => (target, ...args) => {
  if (!target) {
    console.log('Must provide a target');
    return undefined;
  }

  const targetMethod = target[name];
  return targetMethod && method === targetMethod ? targetMethod.apply(target, args) : undefined;
};

module.exports.default = invoker;
