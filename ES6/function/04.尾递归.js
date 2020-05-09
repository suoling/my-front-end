function fibonacci(n, prev = 1, next = 1) {
  if (n <= 2) {
    return next;
  }
  return fibonacci(n - 1, next, prev + next);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1 1
console.log(fibonacci(3)); // 1 1 2
console.log(fibonacci(5)); // 1 1 2 3 5
console.log(fibonacci(8)); // 1 1 2 3 5 8 13 21
console.log(fibonacci(100));
