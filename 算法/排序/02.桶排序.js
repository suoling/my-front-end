// 桶排序：浪费空间，且只能比较自然数，时间复杂度是 O(m+n)
// 需要对数据范围在 0~n 之间的整数进行排序
// 适用范围-排序的元素都是整数，而且排序元素的范围不大

const arr = [2, 4, 3, 1, 6, 5, 3, 9]

// arr表示乱序的数组
// n表示arr数组中数据的范围
function pailSort (arr, n) {
    let midArr = []
    let newArr = []
    for (let i = 0; i <= n; i++) {
        midArr.push(0)
    }
    arr.forEach(function (item) {
        midArr[item]++
    })
    midArr.forEach(function (item, index) {
        if (item) {
            for (let i = 1; i <= item; i++) {
                newArr.push(index)
            }
        }
    })
    return newArr
}

console.log(pailSort(arr, 10)) // [ 1, 2, 3, 3, 4, 5, 6, 9 ]