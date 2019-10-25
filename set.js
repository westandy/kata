const array = [1, 2, 3, 4, 4, 4, 4, 4, 5, 6];

const unique = array.reduce((accum, item) => {
  return { ...accum, [item]: 0 };
}, {});
console.log(Object.keys(unique));

console.log(new Set(array));
