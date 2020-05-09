// 枚举法 

// 坑人的奥数题
// XXX + XXX = XXX，将数字1-9分别填入9个X中，每个数字只能使用一次使得等式成立，例如173 + 286 = 459

// 算法逻辑如下：

// num数组表示9个位置的对应的数字
const num = []
num.length = 10

const book = []
book.length = 10

var i , total = 0, sum

for (num[1] = 1; num[1] <= 9; num[1]++) {
    for (num[2] = 1; num[2] <= 9; num[2]++) {
        for (num[3] = 1; num[3] <= 9; num[3]++) {
            for (num[4] = 1; num[4] <= 9; num[4]++) {
                for (num[5] = 1; num[5] <= 9; num[5]++) {
                    for (num[6] = 1; num[6] <= 9; num[6]++) {
                        for (num[7] = 1; num[7] <= 9; num[7]++) {
                            for (num[8] = 1; num[8] <= 9; num[8]++) {
                                for (num[9] = 1; num[9] <= 9; num[9]++) {
                                    // 初始化book数组
                                    for (i = 1; i <= 9; i++) {
                                        book[i] = 0
                                    }
                                    // 如果某个数出现过就标记一下
                                    for (i = 1; i <= 9; i++) {
                                        book[num[i]] = 1
                                    }
                                    // 统计共出现了多少个不同的数
                                    sum = 0
                                    for (i = 1; i <= 9; i++) {
                                        sum += book[i]
                                    }
                                    // 如果正好出现了9个不同的数，~并且满足等式条件，则输出
                                    if (sum === 9 && (num[1] * 100 + num[2] * 10 + num[3] +
                                        num[4] * 100 + num[5] * 10 + num[6] ===
                                        num[7] * 100 + num[8] * 10 + num[9])) {
                                        total++
                                        console.log(num[1] + ',' + num[2] + ',' + num[3] + ',' + num[4] + ',' + num[5] + ',' + num[6] + ',' + num[7] + ',' + num[8] + ',' + num[9])
                                        console.log( '' + num[1] + num[2] + num[3] + '+' + num[4] + num[5] + num[6] + '=' + num[7] + num[8] + num[9])
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log('total:', total / 2)
