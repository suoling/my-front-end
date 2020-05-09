// 归并排序
// 归并排序是一种分治算法。本质上就是把一个原始数组切分成较小的数组，直到每个小数组只有一个位置，
// 接着把小数组归并成较大的数组，在归并过程中也会完成排序，直到最后只有一个排序完毕的大数组

const arr = [3, 1, 4, 2, 7, 2, 1, 4, 8]

function mergeSort (arr) {
    let len = arr.length
    if (len < 2) {
        return arr
    }
    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
    let arrNew = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arrNew.push(left.shift())
        } else {
            arrNew.push(right.shift())
        }
    }
    while (left.length) {
        arrNew.push(left.shift())
    }
    while (right.length) {
        arrNew.push(right.shift())
    }
    return arrNew
}

console.log(mergeSort(arr))