// -  请写程序将1到n之间的数打印输出。要求
//  - 随机乱序
//  - 不能重复
//  - 全部输出，不能遗漏
//  - 如果要用到数据容器，只能用数组

let newArr = []
let flag = true

function printNum (n) {
    // Math.random() 函数返回一个浮点,  伪随机数在范围[0，1)
    let val = Math.ceil(Math.random() * n)
    if (!exitFlag(newArr, val)) {
        newArr.push(val)
        console.log('val:', val)
    }
    if (newArr.length === n) {
        flag = false
    }
}

function exitFlag (arr, ele) {
    for (let i = 0; i <= arr.length; i++) {
        if (ele === newArr[i]) {
            return true
        }
    }
    return false
}

while(flag) {
    printNum(5)
}