// 以下代码，打印出来的值是多少？简述一下原因

setTimeout(function () {
  console.log(1)
}, 0)

Promise.resolve(function () {
  console.log(2)
})

new Promise(function (resolve) {
  console.log(3)
  resolve()
}).then(() => {
  console.info(4)
})

console.log(5)

// 3 5 4 1