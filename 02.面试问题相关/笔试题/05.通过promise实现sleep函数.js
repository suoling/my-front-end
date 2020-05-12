function sleeps (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

// 实现一个Promise函数

// sleeps(2000).then(() => {
//   console.log('done')
// })

async function aa () {
  await sleeps(2000)
  console.log('done')
}
aa()
