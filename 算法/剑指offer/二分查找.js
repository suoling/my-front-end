// var findEle = function (arr, ele) {
//   var start = 0
//   var end = arr.length
//   while(end - start > 1) {
//     var middle = (end + start) / 2
//     if (arr[middle] > ele) {
//       end = middle
//     } else if (arr[middle] == ele) {
//       return true
//     } else if (arr[middle] < ele) {
//       start = middle
//     }
//   }
//   return false
// }
//
// var arr = [1, 3, 5, 6, 7, 9, 11]
// var ele = 8
// console.log(findEle(arr, ele))
var find = function (arr, ele) {
    var start = 0;
    var end = arr.length - 1;

    while (end - start > 1){
        var mid =  parseInt((end + start) / 2);
        if(arr[mid] == ele){
            return true;
        } else if (arr[mid] > ele){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    if(end - start == 1){
        if((arr[end] == ele) || (arr[start] == ele)){
            return true;
        }
    }
    return false;
}
var arr = [1, 3, 5, 6, 7, 9, 11]
var ele = 3
console.log(find(arr, ele))
