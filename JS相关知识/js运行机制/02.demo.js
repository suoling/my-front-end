setTimeout(function () {
  console.log('6')
}, 0)

console.log('1')

async function async1 () {
  console.log('2')
  console.log(await async2())
  console.log('5')
}

async function async2 () {
  console.log('3')
  return '1111111'
}

async1()

console.log('4')
console.log('888')
console.log('999')

// 1
// 2
// 3
// 4
// 888
// 999
// 1111111
// 5
// 6