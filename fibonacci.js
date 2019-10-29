/**
 * We are still making 2^N calls where N = the fib index,
 * but by using the memo (for memoization), we are really making
 * N calculations.
 */

function fibonacci(n) {
  let memo = [];
  return fibHelper(n, memo);
}

function fibHelper(n, memo) {
  if (n < 2) {
    return 1;
  }

  if (!memo[n]) {
    memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
  }
  return memo[n];
}

console.log(fibonacci(1002));
