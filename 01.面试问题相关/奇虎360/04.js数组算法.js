// 实现一个JavaScript函数，对指定的整数数组，返回任意两个数为10的所有结果
// 例如：[-1, 9, 2, 8, 3, 11, 1, 7...]，返回[[-1, 11], [9, 1], [2, 8], [3, 7]...]

function sumFun (arr) {
  const arrResult = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] == 10) {
        arrResult.push([arr[i], arr[j]])
      } 
    }
  }
  return arrResult
}

const arr = [-1, 9, 2, 8, 3, 11, 1, 7]
 console.log(sumFun(arr))