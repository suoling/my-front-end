function* numbers() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
  yield 5;
}

// 扩展运算符
console.log([...numbers()]); // [ 1, 2 ]

// Array.from方法
console.log(Array.from(numbers())); // [ 1, 2 ]

// 解构赋值
let [x, y] = numbers();
console.log([x, y]); // [ 1, 2 ]

// for...of 循环
for (let n of numbers()) {
  console.log(n); // 1 2
}
