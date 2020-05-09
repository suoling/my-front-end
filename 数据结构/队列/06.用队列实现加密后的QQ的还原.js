// 规则是这样的：首先将第 1个数删除，紧接着将第 2 个数放到
// 这串数的末尾，再将第 3 个数删除并将第 4 个数放到这串数的末尾，再将第 5 个数删除……
// 直到剩下最后一个数，将最后一个数也删除。按照刚才删除的顺序，把这些删除的数连在一
// 起就是真实的QQ啦。

// 加密后的QQ号
const arrAfter = [6, 3, 1, 7, 5, 8, 9, 2, 4];

function getQQ (arr) {
    let arrBefore = []
    let arrMiddle = Object.assign([], arrAfter)
    arrMiddle.unshift(0)
    // 将head设置为1，相比设置为0比较好处理
    let head = 1 
    // 将tail设置为数组末尾的下一位，以免head和tail重合时还得做额外的处理来判断
    let tail = arrMiddle.length 
    while (head < tail) {
        arrBefore.push(arrMiddle[head])
        head++
        arrMiddle.push(arrMiddle[head])
        head++
        tail++
    }
    return arrBefore
}

console.log(getQQ(arrAfter)) // [ 6, 1, 5, 9, 4, 7, 2, 8, 3 ]