// Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。
// 也就是说，错误总是会被下一个catch语句捕获。

// 一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

// 建议总是使用catch方法，而不使用then方法的第二个参数。

// 理由是catch方法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）

// 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，
// Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
// “Promise 会吃掉错误”。

const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);

// ReferenceError: x is not defined
// 123