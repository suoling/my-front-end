// String.raw()方法，用来充当模板字符串的处理函数，返回一个斜杠都被转义的字符串
console.log(String.raw`Hi\n${2 + 3}!`); // Hi\\n5!
console.log(String.raw`Hi\u000A!`); // Hi\\u000A!
console.log(String.raw`Hi\\n`); // Hi\\\\n
console.log(String.raw({ raw: "test" }, 0, 1, 2)); // t0e1s2t
console.log(String.raw({ raw: ["t", "e", "s", "t"] }, 0, 1, 2)); // t0e1s2t
