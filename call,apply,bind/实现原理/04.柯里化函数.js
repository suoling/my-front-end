//ES5实现
function curry(fn) {
  var args = [],  //装总的参数的数组
    n = fn.length;   //传入的函数的参数个数
  return function core() {
    var arg = [].slice.call(arguments);  //将任意的类数组对象转化为数组，返回的函数传入的参数
    args = args.concat(arg);  //收集传入的参数
    n -= arg.length;  //n的值在不断递归传入参数的过程中逐渐减小，用于判断是否继续递归core
    return n===0 ? fn.apply(null, args) : core;
  }
}

var add4 = curry(function (a, b, c, d) {
  return a + b + c + d;
});
console.log(add4(1, 2)(2)(3));  //8

//ES6实现
const curry = (fn, ...args) => 
    args.length < fn.length
        // 参数长度不足时 重新柯里化该函数 等待接受新的参数
        ? (...arguments) => curry(fn, ...args, ...arguments)
        // 参数长度满足时 执行函数
        : fn(...args);


function sumFn(a, b, c) {
    return a + b + c;
}
// 举例
console.log(curry(sumFn, 7, 8, 6))  // 21
console.log(curry(sumFn, 7, 8)(6))  // 21
console.log(curry(sumFn)(7)(8)(6));  // 21
console.log(curry(sumFn, 7, 8)(6));  // 21

