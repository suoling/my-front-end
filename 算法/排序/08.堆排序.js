const arr = [3, 1, 4, 2, 7, 2, 1, 4, 8]

let len = arr.length

// 构建最大堆
function buildMaxHeap (arr) {
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}

// 堆的调整
function heapify (arr, i) { 
  let maxIndex = i
  let left = maxIndex * 2 + 1
  let right = maxIndex * 2 + 2
  if (left < len && arr[left] > arr[maxIndex]) {
    maxIndex = left
  }
  if (right < len && arr[right] > arr[maxIndex]) {
    maxIndex = right
  }
  if (maxIndex !== i) {
    swap(arr, i, maxIndex)
    heapify(arr, maxIndex)
  }
}

// 交换两个值的位置
function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 堆排序
function heapSort (arr) {
  buildMaxHeap(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i)
    len--
    heapify(arr, 0)
  }
  return arr
}

console.log('result:', heapSort(arr))