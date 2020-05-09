// 给定0--9这10个数字，组成的4位数，其中这个4位数，每一位都互不相等

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let num = 0
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= 9; k++) {
      for (let m = 0; m<= 9; m++) {
        if (weiYi(nums[i], nums[j], nums[k], nums[m])) {
          console.log(`${nums[i]}${nums[j]}${nums[k]}${nums[m]}`)
          num++
        }
      }
    }
  }
}

console.log(num)

function weiYi (a, b, c, d) {
  if (a !== b && a!== c && a !== d && b !== c && b !== d && c !== d) {
    return true
  }
  return false
}