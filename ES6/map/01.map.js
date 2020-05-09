// Map类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
// Map 结构提供了“值—值”的对应

let o = { p: "hello world" };
let m = new Map();
// set(key, value)
m.set(o, "content");
console.log(m); // Map { { p: 'hello world' } => 'content' }
// get(key)
console.log(m.get(o)); // content
// has(key)
console.log(m.has(o)); // true
// delete(key)
console.log(m.delete(o)); // true
console.log(m.has(o)); // false

// Map 接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
let m1 = new Map([["name", "wsl"], ["age", 27]]);
// size属性
console.log(m1.size); // 2
// clear()
console.log(m1.clear()); // undefined 没有返回值
console.log(m1.size); // 0

// 事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素
// 的数组的数据结构都可以当作Map构造函数的参数。
// Set和Map都可以用来生成新的 Map。

// Map 接受Set作参数
let s1 = new Set([["foo", 1], ["bar", 2]]);
let m2 = new Map(s1);
console.log(m2); // Map { 'foo' => 1, 'bar' => 2 }

// Map 接受Map作参数
let m3 = new Map([["baz", 3]]);
let m4 = new Map(m3);
console.log(m4); // Map { 'baz' => 3 }

let m5 = new Map();
m5.set(1, "aaa").set(1, "bbb");
console.log(m5.get(1)); // bbb  对同一个键多次赋值，后面的值将覆盖前面的值
console.log(m5.get(2)); // undefined 如果读取一个未知的键，则返回undefined

// 如果 键是引用类型数据的话
// Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
let m7 = new Map();
let k1 = ["a"];
let k2 = ["a"];
m7.set(k1, "111");
m7.set(k2, "222");
console.log(m7.get(k1)); // 111
console.log(m7.get(k2)); // 222

// 如果 键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键
// 0 和 -0 是一个键
// 布尔值true 和 字符串true 是不同的键
// undefined 和 null 也是不同的键
// Map 视 NaN 为同一个键
