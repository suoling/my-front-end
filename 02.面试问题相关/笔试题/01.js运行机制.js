async function async1 () {
  console.log(1)
  await async2()
  console.log(2)
}

async function async2 () {
  console.log(3)
}

console.log(4)

async1()

new Promise(function (resolve, reject) {
  console.log(5)
  resolve()
}).then(function () {
  console.log(6)
})

console.log(7)

// 打印结果：4, 1, 3, 5, 7, 2, 6