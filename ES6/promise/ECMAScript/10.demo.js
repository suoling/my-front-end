// 写法一
const promise1 = new Promise(function(resolve, reject) {
  try {
    throw new Error('test1');
  } catch(e) {
    reject(e);
  }
});
promise1.catch(function(error) {
  console.log(error);
});  // Error: test1

// 写法二
const promise2 = new Promise(function(resolve, reject) {
  reject(new Error('test2'));
});
promise2.catch(function(error) {
  console.log(error);
});  // Error: test2