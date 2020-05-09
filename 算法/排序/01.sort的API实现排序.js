// sort排序A

const arr = [3, 2, 4, 1, 6, 33, 11]

// 按照unicode编码来排序
arr.sort() // [ 1, 11, 2, 3, 33, 4, 6 ]

// 比较相邻两元素，return -1 时，表示 不交换位置

// 从小到大的顺序排列
arr.sort(function (a, b){
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}) // [ 1, 2, 3, 4, 6, 11, 33 ]

// 从大到小的顺序排列
arr.sort(function (a, b) {
    if (a < b) {
        return 1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
}) // [ 33, 11, 6, 4, 3, 2, 1 ]

console.log(arr)