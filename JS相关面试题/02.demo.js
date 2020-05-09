// 写一个方法，传入数字x，从一个一维数组里找到两个数字符合“n1 + n2 ＝ x” 

// function findNum (arr, n) {
//   const len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] == n) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

function findNum (arr, n) {
  let num = []
  arr.find((a, i) => {
    arr.slice(i + 1).find(b => a + b == n && (num = [a, b]))
  })
  return num
}

console.log(findNum([3, 2, 5, 1, 3, 2, 7, 0], 6))