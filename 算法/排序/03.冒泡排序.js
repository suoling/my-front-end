// 冒泡排序：时间复杂度是O(N的2次方)，执行效率底
// 比较两个相邻的项，如果第一个大于第二个则交换他们的位置,
// 元素项向上移动至正确的顺序，就好像气泡往上冒一样

const arr = [3, 7, 1, 9, 11, 34, 57, 7]

function bubbleSort (arr) {
    // 外循环控制轮数，如果是从小到大排序，第一轮会把数组中最大的元素放到数组的末尾
    for (let i = 0, len = arr.length; i < len - 1; i++) { 
        // 内循环进行相邻两元素的比较，然后交换位置
        for (let j = 0; j < len - 1 - i; j++) { 
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr)) // [ 1, 3, 7, 7, 9, 11, 34, 57 ]