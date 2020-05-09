// 字符串
const [a, b, c, d, e] = "hello";
console.log(a, b, c, d, e); // h e l l o

let { length: len } = "hello";
console.log(len); // 5

// 数值和布尔值
let { toString: s } = 123;
// s === Number.prototype.toString // true
console.log(s);
let { toString: ss } = true;
// ss === Boolean.prototype.toString // true
console.log(ss);
// undefined 和 null 由于无法转成对象，所以报错
// let { prop: x } = undefined;
// let { prop: y } = null;

// 函数参数
function add([x, y]) {
  return x + y;
}
console.log(add([1, 2])); // 3

console.log([[1, 2], [3, 4]].map(([a, b]) => a + b)); // [3, 7]

// 函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值
function move({ x = 0, y = 0 } = {}) {
  return [x, y];
}

console.log(move({ x: 3, y: 8 })); // [3, 8]
console.log(move({ x: 3 })); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); // [0, 0]

// 为函数move2的参数指定默认值，而不是为变量x和y指定默认值
function move2({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}

console.log(move2({ x: 3, y: 8 })); // [3, 8]
console.log(move2({ x: 3 })); // [3, 0]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]

console.log([1, undefined, 3].map((x = "yes") => x)); // [ 1, 'yes', 3 ]

// 圆括号   变量声明语句，模式不能使用圆括号。下述的全报错
// 变量声明语句
// let [(a)] = [1];
// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};
// let { o: ({ p: p }) } = { o: { p: 2 } };
// 函数声明
// function f([(z)]) { return z; }
// function f([z,(x)]) { return x; }
// 赋值语句
// ({ p: a }) = { p: 42 };
// ([a]) = [5];
// [({ p: a }), { x: c }] = [{}, {}];

let aq;
let cq;
[{ p: aq }, { x: cq }] = [{}, {}];
console.log(aq, cq); // undefined undefined

// 赋值语句的非模式部分，可以使用圆括号
// [(b)] = [3]; // 正确
// ({ p: (d) } = {}); // 正确
// [(parseInt.prop)] = [3]; // 正确
