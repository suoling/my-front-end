// 字符的 Unicode 表示法。只限于码点在\u0000~\uFFFF之间的字符
console.log("\u0061"); // a
// 码点超出\uFFFF的字符，必须使用双字节
console.log("\uD842\uDFB7"); // �
console.log("\u20BB"); // ₻
console.log("\u20BB7"); // ₻7  \u20BB + 7
// \u20BB7 码值大于 \uFFFF,所以JavaScript会理解成 \u20BB + 7
// 由于 \u20BB 是不可打印字符，所以，最后只会显示一个空格，后边跟着 7

console.log("\u{20BB7}"); // �  使用{}可以正确解读码值大于 \uFFFF 的字符
console.log("\u{41}\u{42}\u{43}"); // ABC
let hello = 123;
console.log(hello); // 123 hell\u{6F}
console.log("\u{1F680}" === "\uD83D\uDE80"); // true

console.log("z" === "z"); // true
console.log("\172" === "z"); // true
console.log("\x7A" === "z"); // true
console.log("\u007A" === "z"); // true
console.log("\u{7A}" === "z"); // true
