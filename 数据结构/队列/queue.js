// 队列--先进先出的数据结构

function queueFun (queueArr) {
   var qArr = [], initArr = [], head, tail
   qArr.length = queueArr.length + 1
   for (var i = 0; i < qArr.length; i++) {
     if (i === 0) {
       qArr[i] = 0
     } else {
       qArr[i] = queueArr[i - 1]
     }
   }
   head = 1
   tail = qArr.length
   while (head < tail) {
     initArr.push(qArr[head])
     head++
     qArr[tail] = qArr[head]
     tail++
     head++
   }
   return initArr
}

var testArr = [6, 3, 7, 9, 2, 1]
console.log(queueFun(testArr))
