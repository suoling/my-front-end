// 字符串 "we are family", 中间有空格，
// 在 url中特殊字符串是不可以存在的，比如 空格 ，#等。
// 所以 "we are family" 在url中的表示是 "we%20are%20family"。
// 也就是控制的ascii码表对应的数字的十六进制数字前加百分号表示。
// 现在要求写一个这样的函数实现这样的空格。现在只需要考虑空格就可以。
// function strReplace (str) {
//   var arrNew = str.split('')
//   for (var i = 0 ; i < arrNew.length; i++) {
//     if (arrNew[i] === ' ') {
//       arrNew[i] = '%20'
//     }
//   }
//   return arrNew.join('')
// }
// var str = 'we are family'
// console.log(strReplace(str))
