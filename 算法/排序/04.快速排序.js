// 快速排序：时间复杂度最差是O(N的2次方)，平均时间复杂度为O(NlogN)
// 1) 首先，在数组中选择一个元素作为主元，默认将第一项作为主元
// 2) 创建两个指针，左边的指向数组第一个项，右边的指向最后一个项，
// 移动右指针，直到找到一个比主元小的项，接着，移动左边的指针，直到找到一个比主元大的项，然后交换它们。
// 重复这个过程，直到左侧的指针和右侧的指针相遇。这个使比主元小的都在左侧，比主元大的都在右侧。这一步叫划分操作
// 3) 接着，算法对划分后的小数组（较主元小的值组成的的小数组， 以及较主元大的值组成的小数组）重复之前的两个步骤，直到排序完成
// 切记：一定要先从右往左找，再从左往右找，否则会出错

const arr = [3, 1, 5, 3, 8, 15, 43, 37]

function quickSort (arr, left, right) {
    let len = arr.length

    left = left == undefined ? 0 : left
    right = right == undefined ? len - 1 : right

    if (left > right) {
        return
    }

    let i = left
    let j = right

    while (i !== j) {
        // 此处 要先从右向左走，故先判断右指针j
        while (arr[j] >= arr[left] && i < j) {
            j--
        }
        while (arr[i] <= arr[left] && i < j) {
            i++
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[left], arr[i]] = [arr[i], arr[left]]

    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)

    return arr
}

console.log(quickSort(arr)) // [ 1, 3, 3, 5, 8, 15, 37, 43 ]