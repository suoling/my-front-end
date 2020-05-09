// 纸牌游戏--小猫钓鱼--队列和栈配合使用

// 初始化队列--小哼手里牌的相关信息（先进先出）
const q1 = {
  head : 1,
  tail : 1,
  data: []
}

// 初始化队列--小哈手里牌的相关信息（先进先出）
const q2 = {
  head : 1,
  tail : 1,
  data: []
}

// 初始化栈--桌面上牌的相关信息（先进后出）
const s = {
  top: 0,
  data: []
}

// 初始化用来标记的数组，用来标记哪些牌已经在桌上（桶排序）
const book = []
book.length = 10

for (let i = 1; i <= 9; i++) {
  book[i] = 0
}

// 依次向队列中插入6个数
const arr1 = [2, 4, 1, 2, 5, 6]
const arr2 = [3, 1, 3, 5, 6, 4]

// 小哼手上的6张牌
for (let i = 1; i <= arr1.length; i++) {
  q1.data[q1.tail] = arr1[i - 1]
  q1.tail++
}

// 小哈手上的6张牌
for (let i = 1; i <= arr2.length; i++) {
  q2.data[q2.tail] = arr2[i - 1]
  q2.tail++
}

// 当队列不为空的时候执行循环
while (q1.head < q1.tail && q2.head < q2.tail) {
  // 小哼出一张牌
  t = q1.data[q1.head]
  // 判断小哼当前打出的牌是否能赢牌
  if (book[t] === 0) {  // 表明桌上没有牌面为t的牌
    // 小哼此轮没有赢牌
    q1.head++  // 小哼已经打出一张牌，所以要把打出的牌出队
    s.top++
    s.data[s.top] = t  // 再把打出的牌放到桌上，即入栈
    book[t] = 1 // 标记桌上现在已经有牌面为t的牌
  } else {
    // 小哼此轮可以赢牌
    q1.head++
    q1.data[q1.tail] = t
    q1.tail++
    while (s.data[s.top] !== t) { // 把桌上可以赢得的牌依次放到手中牌的末尾
      book[s.data[s.top]] = 0 // 取消标记
      q1.data[q1.tail] = s.data[s.top] // 依次放入队尾
      q1.tail++
      s.top--  // 栈中少了一张牌，所以栈顶要减1
    }
  }

  // 小哈出一张牌
  t = q2.data[q2.head]
  // 判断小哈当前打出的牌是否能赢牌
  if (book[t] === 0) {  // 表明桌上没有牌面为t的牌
    // 小哈此轮没有赢牌
    q2.head++  // 小哈已经打出一张牌，所以要把打出的牌出队
    s.top++
    s.data[s.top] = t  // 再把打出的牌放到桌上，即入栈
    book[t] = 1 // 标记桌上现在已经有牌面为t的牌
  } else {
    // 小哈此轮可以赢牌
    q2.head++
    q2.data[q2.tail] = t
    q2.tail++
    while (s.data[s.top] !== t) { // 把桌上可以赢得的牌依次放到手中牌的末尾
      book[s.data[s.top]] = 0 // 取消标记
      q2.data[q2.tail] = s.data[s.top] // 依次放入队尾
      q2.tail++
      s.top--  // 栈中少了一张牌，所以栈顶要减1
    }
  }
}

if (q2.head === q2.tail) {
  console.log('小哼赢')
  console.log('小哼当前手中的牌是：')
  for (let i = q1.head; i <= q1.tail-1; i++) {
    console.log(q1.data[i])
  }
  if (s.top > 0) { // 如果桌上有牌则依次输出桌上的牌
    console.log('桌上的牌是：')
    for (let i = 1; i <= s.top; i++) {
      console.log(s.data[i])
    }
  } else {
    console.log('桌上已经没有牌了')
  }
} else {
  console.log('小哈赢')
  console.log('小哈当前手中的牌是：')
  for (let i = q2.head; i <= q2.tail-1; i++) {
    console.log(q2.data[i])
  }
  if (s.top > 0) { // 如果桌上有牌则依次输出桌上的牌
    console.log('桌上的牌是：')
    for (let i = 1; i <= s.top; i++) {
      console.log(s.data[i])
    }
  } else {
    console.log('桌上已经没有牌了')
  }
}
