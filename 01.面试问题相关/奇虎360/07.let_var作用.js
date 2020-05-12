// 说一下以下的代码有什么问题，要怎么优化：
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.info(i)
  }, 1)
}
// 上述代码会打印出 10个10

// 如果想让它按意图打印出0-9，则需要下边的写法：
// 方法一
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.info(i)
  }, 1)
}

// 方法二
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.info(i)
    }, 1)
  })(i)
}

// 方法三
for (var i = 0; i < 10; i++) {
  function bibao () {
    var j = i
    setTimeout(function () {
      console.log(j)
    }, 1)
  }
  bibao()
}