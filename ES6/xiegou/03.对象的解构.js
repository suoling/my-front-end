let { foo, bar } = { foo: "aaa", bar: "bbb" };
// let { bar, foo } = { foo: "aaa", bar: "bbb" }; 和上边的等同
console.log(foo, bar); // aaa bbb

let { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz); // undefined

let { fff: zzz } = { fff: "aaa", bar: "bbb" };
console.log(zzz); // aaa

let obj = { first: "hello", last: "world" };
let { first: f, last: l } = obj;
console.log(f, l); // hello world

// let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" }; // 对象的解构赋值的简写

let { xxx: www } = { xxx: "aaa", bar: "bbb" };
console.log(www); // aaa
// console.log(xxx); // 报错

let obj2 = {
  p: ["Hello", { y: "World" }]
};

let {
  p,
  p: [x, { y }]
} = obj2;
console.log(p); // [ 'Hello', { y: 'World' } ]
console.log(x, y); // hello  world

const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let {
  loc,
  loc: { start },
  loc: {
    start: { line }
  }
} = node;
console.log(loc); // { start: { line: 1, column: 5 } }
console.log(start); // { line: 1, column: 5 }
console.log(line); // 1

let obj3 = {};
let arr = [];

({ foo: obj3.prop, bar: arr[0] } = { foo: 123, bar: true });

console.log(obj3); // { prop: 123 }
console.log(arr); // [ true ]

var { qq = 3 } = {};
console.log(qq); // 3

var { zz, xx = 5 } = { zz: 1 };
console.log(zz, xx); // 1 5

var { cc: vv = 3 } = {};
console.log(vv); // 3

var { mm: nn = 3 } = { mm: 5 };
console.log(nn); // 5

var { message: msg = "Something went wrong" } = {};
console.log(msg); // Something went wrong

var { tt = 3 } = { tt: undefined };
console.log(tt); // 3

var { ttt = 3 } = { ttt: null };
console.log(ttt); // null

let { ddd } = { ssss: "baz" };
console.log(ddd); // undefined

// let {
//   cdcd: { dede }
// } = { swsw: "baz" };
// console.log(dede); // 报错  嵌套对象，子对象所在的父属性不存在

let rt;
({ rt } = { rt: 1 });
console.log(rt); // 1 {}不能放于行首，否则会被解析成代码块，然后报错。所以，此处加上了()

// 解构赋值允许等号左边的模式之中，不放置任何变量名
// 表达式无意义，但语法是合法的，可以执行
// ({} = [true, false]);
// ({} = 'abc');
// ({} = []);

// 对象的解构赋值，可以作用于现有对象的方法
let { log, sin, cos } = Math;

let arr2 = [1, 2, 3];
let { 0: first, [arr2.length - 1]: last } = arr2;
console.log(first, last); // 1 3
