// 在解构赋值中，参数默认值 是在 = 左侧

// 写法一
function m1({ x = 0, y = 0 } = {}) {
  return [x, y];
}

// 写法二
function m2({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
console.log(m1()); // [0, 0]
console.log(m2()); // [0, 0]

// x 和 y 都有值的情况
console.log(m1({ x: 3, y: 8 })); // [3, 8]
console.log(m2({ x: 3, y: 8 })); // [3, 8]

// x 有值，y 无值的情况
console.log(m1({ x: 3 })); // [3, 0]
console.log(m2({ x: 3 })); // [3, undefined]

// x 和 y 都无值的情况
console.log(m1({})); // [0, 0];
console.log(m2({})); // [undefined, undefined]

console.log(m1({ z: 3 })); // [0, 0]
console.log(m2({ z: 3 })); // [undefined, undefined]
