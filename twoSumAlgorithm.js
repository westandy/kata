const sorted = [1, 3, 4, 4, 5, 7, 9];
const target = 13;
const unsorted = [9, 3, 2, 3, 1, 5, 7];

function findSumSorted(list, target) {
  let left = 0,
    right = list.length - 1;
  while (left < right) {
    const sum = list[left] + left[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return true;
    }
  }
  return false;
}
console.log(findSumSorted(sorted, target));

function findSum(list, target) {
  let set = {};
  for (let ii = 0; ii < list.length; ii++) {
    const value = list[ii];
    const sumerand = target - value;
    if (set[sumerand]) {
      return true;
    }
    set[value] = sumerand;
  }
  return false;
}
console.log(findSum(sorted, target));
console.log(findSum(unsorted, target));
