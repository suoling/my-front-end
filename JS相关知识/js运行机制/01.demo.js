setTimeout(function () {
  console.log('6')
}, 0)
console.log('1')
async function async1() {
  console.log('2')
  await async2()
  console.log('5')
}
async function async2() {
  console.log('3')
}
async1()
console.log('4')

// 1
// 2
// 3
// 4
// 5
// 6