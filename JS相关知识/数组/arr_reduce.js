const arr = [1, 2, 3, 4, 5]

const result = arr.reduce((previousValue, currentValue, index, arr) => {
  return previousValue + currentValue
}, 10)

console.log('result:', result)