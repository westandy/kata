/**
 * Find all positive integer problems under 1000 for
 * a^3 + b^3 = c^3 + d^3
 *
 * This solution is O(n^2) space(1) and O(n^2 + OUTPUT) time on average,
 * where OUTPUT is the size of the output.
 */
const N = 1000;
let potentials = {};
for (let a = 1; a <= N; a++) {
  for (let b = a; b <= N; b++) {
    const cube = Math.pow(a, 3) + Math.pow(b, 3);

    const potential = potentials[cube];
    potential
      ? (potentials[cube] = [...potential, { a, b }])
      : (potentials[cube] = [{ a, b }]);
  }
}

const count = Object.values(potentials).reduce(
  (sum, list) => (list.length > 1 ? sum + 1 : sum),
  0
);
console.log(count);
