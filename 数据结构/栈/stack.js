// 栈--后进先出的数据结构
// 用来判断回文字符串
function stackFun (stackStr) {
  var stackNewArr = [], len, mid, next, top
  len = stackStr.length
  mid = Math.floor(len / 2 - 1)
  top = 0
  for (var i = 0; i <= mid; i++) {
    stackNewArr[++top] = stackStr[i]
  }
  if (len % 2 === 0) {
    next = mid + 1
  } else {
    next = mid + 2
  }
  for (var j = next; j <= len-1; j++) {
    if (stackStr[j] !== stackNewArr[top]) {
      break
    }
    top--
  }

  if (top === 0) {
    return 'YES'
  } else {
    return 'NO'
  }
}

console.log(stackFun('abeffeba'))
