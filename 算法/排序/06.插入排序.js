// 插入排序
// 每次排一项，假设数组的第一项已经排序，
// 接着，把第二项与第一项进行对比，第二项是该插入到第一项之前还是之后，
// 第三项是该插入到第一项之前还是第一项之后还是第三项

const arr = [4, 1, 3, 6, 23, 43, 1, 4, 8]

function insertSort (arr) {
    for (let i = 1, len = arr.length;  i < len; i++) {
        let preIndex = i - 1
        let currentEle = arr[i]
        while (preIndex >= 0 && currentEle < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = currentEle
    }
    return arr
}

console.log(insertSort(arr))