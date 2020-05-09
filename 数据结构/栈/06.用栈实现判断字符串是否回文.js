function huiWen (str) {
    let len = str.length
    let arrMid = []
    let mid = Math.floor(len / 2 - 1)
    let next = null
    let top = 0
    for (let i = 0; i <= mid; i++) {
        arrMid[++top] = str[i]
    }
    if (len % 2 === 0) {
        next = mid + 1
    } else {
        next = mid + 2
    }
    for (let i = next; i < len; i++) {
        if (str[i] !== arrMid[top]) {
            break
        }
        top--
    }

    if (top === 0) {
        return 'YES'
    } else {
        return 'NO'
    }
}

console.log(huiWen('abcdedcba')) // YES
console.log(huiWen('abcddcba')) // YES
console.log(huiWen('abcdcba')) // YES
console.log(huiWen('abdchgabc')) // YES