const divPart = n => d => n / d;

const over10Part = divPart(10);
//console.log(over10Part(2));

const partialOne = (func, arg1) => func.apply(func, [arg1, ...arguments]);

const over10Part1 = partialOne(divPart, 10);
//console.log(over10Part1(5));

const partialTwo = (func, arg1, arg2) => (/*args*/) => {
  const funcOne = func.apply(func, [arg1, ...arguments]);
  return funcOne.apply(funcOne, [arg2, ...arguments]);
};

const div10By2 = partialTwo(divPart, 10, 2);
//console.log(div10By2());

const partial = (func, ...firstArgs) => {
  const pargs = firstArgs;
  return (...secondArgs) => {
    const args = [...firstArgs, ...secondArgs];
    return func.apply(func, args);
  };
};

const over10Partial = partial(divPart, 10);
//console.log(over10Partial(2));

const div10By2By4By5000Partial = partial(divPart, 10, 2);
console.log(div10By2By4By5000Partial());
