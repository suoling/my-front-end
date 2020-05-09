console.log(function(a) {}.length); // 1
console.log(function(a = 5) {}.length); // 0
console.log(function(a, b, c = 5) {}.length); // 2

console.log(function(...args) {}.length); // 0

console.log(function(a = 0, b, c) {}.length); // 0
console.log(function(a, b = 1, c) {}.length); // 1
