// 求出从1——9中，X+Y=Z的个数
// 其中 X！=Y，而且X+Y=Z 和 Y+X=Z 属于 同一种

let count = 0
let data = []

function equit (i, j) {
    if (data.length > 0) {
        for (let m = 0; m < data.length; m++) {
            if (data[m].one === j && data[m].two === i) {
                return false
            }
        }
        return true
    } else {
        return true
    }
}
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
            if (i + j === k && i !== j) {
                if (equit(i, j)) {
                    let obj = {}
                    obj.one = i
                    obj.two = j
                    console.log(i + '+' + j + '=' + (i + j))
                    data.push(obj)
                    count++
                }
            }
        }
    }
}
console.log('count:', count)
// console.log('data:',data)

// for循环可以跳出循环，而forEach不能跳出循环

// let arr = [1,2,3,4,5]
// arr.forEach(item => {
//     if (item % 2 === 0) {
//         return false
//     }
//     console.log('item:', item)  // 1，3，5
// })

// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         return false
//     }
//     console.log(arr[i])  // 1
// }