// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
let s = "Hello world!";
console.log(s.startsWith("Hello")); // true
console.log(s.endsWith("!")); // true
console.log(s.includes("o")); // true
// 上述方法都支持第二个参数，表示开始搜索的位置
// 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。
// 它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束
console.log(s.startsWith("world", 6)); // true
console.log(s.endsWith("Hello", 5)); // true
console.log(s.includes("Hello", 6)); // false

// repeat()方法返回一个新字符串，表示将原字符串重复n次
console.log("x".repeat(3)); // xxx
console.log("hello".repeat(2)); // hellohello
console.log("na".repeat(0)); // ''
// 参数是小数，会被取整
console.log("na".repeat(2.9)); // nana
// 参数如果是 Infinity 或者是 负数，会报错
// console.log("na".repeat(Infinity)); // 报错
// console.log("na".repeat(-1)); // 报错
// 0到-1之间的数，NaN,等同于 0
console.log("na".repeat(-0.9)); // ''
console.log("na".repeat(NaN)); // ''
// 参数是字符串，则会先转换成数字
console.log("na".repeat("na")); // ''
console.log("na".repeat("3")); // nanana

// padStart()，padEnd() 字符串补全长度的功能
// 如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全
console.log("x".padStart(5, "ab")); // ababx
console.log("x".padStart(4, "ab")); // abax
console.log("x".padEnd(5, "ab")); // xabab
console.log("x".padEnd(4, "ab")); // xaba
// 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串
console.log("xxx".padStart(2, "ab")); // xxx
console.log("xxx".padEnd(2, "ab")); // xxx
// 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
console.log("abc".padStart(10, "0123456789")); // 0123456abc
// 如果省略第二个参数，默认使用空格补全长度。
console.log("x".padStart(4)); // '   x'
console.log("x".padEnd(4)); // 'x   '

// 常见用途：
// 为数值补全指定位数
console.log("1".padStart(10, "0")); // 0000000001
console.log("12".padStart(10, "0")); // 0000000012
console.log("123456".padStart(10, "0")); // 0000123456
// 提示字符串格式
console.log("12".padStart(10, "YYYY-MM-DD")); // YYYY-MM-12
console.log("09-12".padStart(10, "YYYY-MM-DD")); // YYYY-09-12

// matchAll()方法返回一个正则表达式在当前字符串的所有匹配
