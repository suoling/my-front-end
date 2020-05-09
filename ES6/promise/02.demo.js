new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1)
}).then(res => {
  console.log(res)
  return 1
}).then(res => {
  console.log(res)
}).then(res => {
  console.log(res)
}).then(res => {
  console.log(res)
}).then(res => {
  console.log(res)
}).then(res => {
  console.log(res)
})