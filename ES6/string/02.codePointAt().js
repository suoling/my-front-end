// 码值大于 \uFFFF 的字符，JavaScript会认为它们是两个字符
var s = "𠮷";
// 对应的码点是 0x20BB7,需要4个字节储存,此时JavaScript不能正确处理，字符串长度误判为2
// charAt方法无法读取整个字符，charCodeAt方法只能分别返回前两个字节和后两个字节的值
// UTF-16编码为 0xD842 0xDFB7,相应的十进制为 55362 57271
console.log(s.length); // 2
console.log(s.charAt(0)); // �
console.log(s.charAt(1)); // �
console.log(s.charCodeAt(0)); // 55362
console.log(s.charCodeAt(1)); // 57271

// codePointAt方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。
let s1 = "𠮷a";
// 32位的UTF-16字符
console.log(s1.codePointAt(0)); // 134071
console.log(s1.codePointAt(0).toString(16)); // 20bb7 转成16进制的码值
console.log(s1.codePointAt(1)); // 57271
console.log(s1.codePointAt(2)); // 97
// for...of方法 可以解决codePointAt()方法传递参数的问题
// 上述s1明明是两位 𠮷 和 a
for (const s of s1) {
  console.log(s.codePointAt(0)); // / 134071 97
}

// codePointAt()方法可以检测一个字符由两个字节还是由四个字节组成
function is32Bit(char) {
  return char.codePointAt(0) > 0xffff;
}
console.log(is32Bit("𠮷")); // true
console.log(is32Bit("a")); // false
