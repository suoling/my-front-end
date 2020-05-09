for (let i = 1; i <= 9; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        str += j + '*' + i + '=' + j * i + ' '
    }
    console.log(str)
}