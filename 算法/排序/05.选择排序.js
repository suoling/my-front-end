// 选择排序：
// 大概思路是找到最小的放在第一位，找到第二小的放在第二位，以此类推 算法复杂度O(n^2)

const arr = [2, 4, 1, 8, 24, 2, 1, 15]

function chooseSort (arr) {
    for (let i = 0, len = arr.length ; i < len; i++) {
        let minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(chooseSort(arr)) // [ 1, 1, 2, 2, 4, 8, 15, 24 ]