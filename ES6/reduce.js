const arr = [1, 3, 4, 7, 2]

let result = arr.reduce(function (prev, curr, index, arr) {
    return prev + curr
}, 0)

console.log(result)