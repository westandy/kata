function compose() {
  var args = arguments;
  console.log('args', args);
  var start = args.length - 1;
  console.log('start', start);
  var i = start;
  console.log('i', i);
  console.log('args[start]', args[start]);
  var result = args[start].apply(this, arguments);
  console.log('result', result);

  return function() {
    while (i--) result = args[i].call(this, result);
    return result;
  };
}

const add = function(a, b) {
  return a + b;
};
const rateconversion = function(value) {
  return value * 1.5;
};
const composed = compose(rateconversion, add);
