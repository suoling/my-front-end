// String.fromCharCode()方法，用于从码点返回对应字符.
// 这个方法不能识别32位的UTF-16字符(Unicode编码大于0xFFFF)
// 该方法定义在字符串的实例对象上
console.log(String.fromCharCode(0x20bb7)); // ஷ
// 上述因为识别不了32位的UTF-16字符，所以。最高位2会被舍弃。
// 最后返回码点\u0bb7对应的字符，而不是码点\u20bb7对应的字符

// String.fromCodePoint()方法，可以识别32位的UTF-16字符(Unicode编码大于0xFFFF)
// 该方法定义在String对象上
console.log(String.fromCodePoint(0x20bb7)); // �
// 如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === "x\uD83D\uDE80y"); // true
