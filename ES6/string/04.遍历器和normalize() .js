for (let codePoint of "foo") {
  console.log(codePoint); // f o o
}

// 码值大于 \uFFFF 的字符，普通的for循环无法识别，而for...of可以识别
let text = String.fromCodePoint(0x20bb7);
for (let i = 0; i < text.length; i++) {
  console.log(text[i]); // � �
}

for (let i of text) {
  console.log(i); // �
}

// normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。
console.log("\u01D1" === "\u004F\u030C"); // false
console.log("\u01D1".length); // 1
console.log("\u004F\u030C".length); // 2
console.log("\u01D1".normalize() === "\u004F\u030C".normalize()); // true

// normalize()方法的参数
// NFC，默认参数，表示“标准等价合成”，指语义 和 视觉上 都等价
// NFD，表示“标准等价分解”
// NFKC，表示“兼容等价合成”。指语义上等价，视觉上不等价。比如“囍”和“喜喜”。这只是用来举例，normalize方法不能识别中文。
// NFKD，表示“兼容等价分解”
console.log("\u004F\u030C".normalize("NFC").length); // 1
console.log("\u004F\u030C".normalize("NFD").length); // 2

// normalize方法目前不能识别三个或三个以上字符的合成
// 特殊情况，还需要正则
