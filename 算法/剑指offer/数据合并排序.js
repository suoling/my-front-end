// 两个已经排序好的数据a1和a2,a1有足够大的空间容纳a2,
// 要求写一个函数将a2复制到a1，并且a1还能保证排序。
// function arrSort (arr1, arr2) {
//   var len = arr1.length + arr2.length
//   var arr1Len = arr1.length
//   var arr2Len = arr2.length
//   for (var i = 0; i < len; i = i + 2) {
//     arr1[len - i - 1] = Math.max(arr1[arr1Len - i - 1], arr2[arr2Len - i - 1])
//     arr1[len - i - 2] = Math.min(arr1[arr1Len - i - 1], arr2[arr2Len - i - 1])
//   }
//   console.log('arr1:', arr1)
//   console.log('arr2:', arr2)
// }
//
// var arr1 = [2, 4, 6, 8, 11]
// var arr2 = [1, 4, 6, 8, 9]
// arrSort(arr1, arr2)
