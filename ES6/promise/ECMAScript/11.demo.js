// 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
// 因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。

const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
});
promise
  .then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) });
// ok