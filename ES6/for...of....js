// for...of循环仅适用于迭代
// 更多用于特定于集合（如数组和对象），但不包括所有对象。
// 注意：任何具有 Symbol.iterator 属性的元素都是可迭代的。

// Array(数组)

// Maps(映射)

// Set(集合)

// String(字符串)

// Arguments Object(参数对象)

// Generators(生成器)
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

for (const g of generator()) {
  console.log(g); // 1 2 3
}

// 退出迭代
const arr = [1, 2, 3, 4];

for (const item of arr) {
  console.log(item); // 1
  break;
}

// 普通对象 不能 迭代
const obj = { a: 1, b: 2 };

for (const item of obj) {
  console.log(item); // obj[Symbol.iterator] is not a function  报错
}
// 转为类数组
const obj1 = {
  length: 3,
  0: "a",
  1: "b",
  2: "c"
};
console.log(obj1); // { '0': 'a', '1': 'b', '2': 'c', length: 3 }
for (const item of Array.from(obj1)) {
  console.log(item); // a b c
}
