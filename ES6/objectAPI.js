let testObj = {
  [Symbol(1)]: "symbol1",
  name: "wsl",
  age: 27,
  [Symbol(2)]: "symbol2"
};

// Object.defineProperty()
let defineProps = Object.defineProperty(testObj, "sex", {
  enumerable: false, // 不可枚举
  configurable: true,
  writable: true,
  value: "women"
});
console.log("testObj:", testObj); // { name: 'wsl', age: 27 }

// Object.keys()
// 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
let keys = Object.keys(testObj);
console.log("keys:", keys); // [ 'name', 'age' ]

// Object.getOwnPropertyNames
// 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
let names = Object.getOwnPropertyNames(testObj);
console.log("names:", names); // [ 'name', 'age', 'sex' ]

// Object.getOwnPropertySymbols()
// 返回一个数组，包含对象自身的所有 Symbol 属性的键名
let symbols = Object.getOwnPropertySymbols(testObj);
console.log("symbols:", symbols); // [ Symbol(1), Symbol(2) ]

// Object.getOwnPropertyDescriptor()
let descriptors = Object.getOwnPropertyDescriptor(testObj, "sex");
console.log("descriptors:", descriptors); // { value: 'women', writable: true, enumerable: false, configurable: true }

// Object.getPrototypeOf()  // 获取对象原型
let prototype = Object.getPrototypeOf(testObj);
console.log("prototype:", prototype); // {}

// Reflect.ownKeys()
// 返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举
let namesAndSymbols = Reflect.ownKeys(testObj);
console.log("namesAndSymbols:", namesAndSymbols); // [ 'name', 'age', 'sex', Symbol(1), Symbol(2) ]

// for...in...
// 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
for (let key in testObj) {
  console.log(key); // name age
}

// for...of...，仅支持 可迭代对象，其中不包括 普通对象
// for (item of testObj) {
//   console.log(item); // testObj[Symbol.iterator] is not a function  报错
// }

// Object.freeze() 对象冻结

// 目前只有四个操作会忽略enumerable为false的属性。
// for...in循环：只遍历对象自身的和继承的可枚举的属性。
// Object.keys()：返回对象自身的所有可枚举的属性的键名。
// JSON.stringify()：只串行化对象自身的可枚举的属性。
// Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
