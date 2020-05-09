// 调用resolve或reject并不会终结 Promise 的参数函数的执行

new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});

// 2  1