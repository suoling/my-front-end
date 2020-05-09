// 采用链式的then，可以指定一组按照次序调用的回调函数。
// 这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），
// 这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。

getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});

// 上述方法采用尖头函数的写法，则为如下：

getJSON("/post/1.json").then(post => getJSON(post.commentURL)).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
)
