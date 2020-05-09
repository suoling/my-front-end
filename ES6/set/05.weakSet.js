// 特点：
// WeakSet的成员只能是对象
// 接受一个数组或类似数组的对象作为参数
// WeakSet没有size属性，所以没有方法遍历它的成员

let a = [[1, 2], [3, 4]];
let ws = new WeakSet();
ws.add(a);
console.log("ws:", ws); // WeakSet {}

let obj = {};
let foo = {};
let ws1 = new WeakSet();
ws1.add(obj);
ws1.add(foo);
console.log("ws1:", ws1); // WeakSet {}
console.log(ws1.has(obj)); // true
console.log(ws1.delete(foo)); // true
console.log(ws1.has(foo)); // false
