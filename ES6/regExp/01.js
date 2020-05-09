// RegExp 构造函数

// var regex = new RegExp("xyz", "i");
// // 等价于
// var regex = /xyz/i;

// var regex = new RegExp(/xyz/i);
// // 等价于
// var regex = /xyz/i;

// var regex = new RegExp(/xyz/, 'i');
// 第一个参数是正则表示式，第二个参数是修饰符
// 上边的这种写法ES5是不允许的，但是ES6是允许的
// 而且ES6规定第二个参数的修饰符会覆盖第一个参数中正则表示式中的修饰符
// console.log(new RegExp(/abc/gi, "i").flags); // i
// -------------------------------------------------------

// 字符串的正则方法

// 字符串对象使用正则的4个方法：match() replace() split() search()
// ES6将这4个方法，在语言内部全部用RegExp的实例方法
// String.prototype.match 调用 RegExp.prototype[Symbol.match]
// String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
// String.prototype.search 调用 RegExp.prototype[Symbol.search]
// String.prototype.split 调用 RegExp.prototype[Symbol.split]
// -------------------------------------------------------

// u 修饰符

// ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为true。
// 加了u修饰符以后，ES6 就会识别其为一个字符，所以第一行代码结果为false。
console.log(/^\uD83D/u.test("\uD83D\uDC2A")); // false
console.log(/^\uD83D/.test("\uD83D\uDC2A")); // true
// 点字符
// 含义是除了换行符以外的任意 单个 字符.
// 对于码点大于0xFFFF的字符，点字符不能识别，必须加上u修饰符。
// 如果不添加u修饰符，正则表达式就会认为字符串为两个字符，从而匹配失败。
var s = "𠮷";
console.log(/^.$/.test(s)); // false
console.log(/^.$/u.test(s)); // true
// Unicode 字符表示法
// 这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词
// 如果不加u修饰符，正则表达式无法识别\u{61}这种表示法，只会认为这匹配 61 个连续的u
console.log(/\u{61}/.test("a")); // false
console.log(/\u{61}/u.test("a")); // true
console.log(/\u{20BB7}/u.test("𠮷")); // true
// 量词
console.log(/a{2}/.test("aa")); // true
console.log(/a{2}/u.test("aa")); // true
console.log(/𠮷{2}/.test("𠮷𠮷")); // false
console.log(/𠮷{2}/u.test("𠮷𠮷")); // true
// 预定义模式
// \S是预定义模式，匹配所有非空白字符。
// 只有加了u修饰符，它才能正确匹配码点大于0xFFFF的 Unicode 字符。
console.log(/^\S$/.test("𠮷")); // false
console.log(/^\S$/u.test("𠮷")); // true
// 正确返回字符串长度的函数
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  console.log(result);
  return result ? result.length : 0;
}
var s = "𠮷𠮷";
console.log(s.length); // 4
console.log(codePointLength(s)); // 2
// i 修饰符
// 有些字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。
// 下面的代码，不加u修饰符，就无法识别非规范的K字符
console.log(/[a-z]/i.test("\u212A")); // false
console.log(/[a-z]/iu.test("\u212A")); // true
// -------------------------------------------------------

// RegExp.prototype.unicode 属性

// 正则实例对象新增unicode属性，表示是否设置了u修饰符
const r1 = /hello/;
const r2 = /hello/u;
console.log(r1.unicode); // false
console.log(r2.unicode); // true
// -------------------------------------------------------

// y 修饰符

// 全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始
// g 修饰符只要剩余位置中存在匹配就可
var s = "aaa_aa_a";
var r3 = /a+/g;
var r4 = /a+/y;
console.log(r3.exec(s)); // [ 'aaa', index: 0, input: 'aaa_aa_a' ]
console.log(r4.exec(s)); // [ 'aaa', index: 0, input: 'aaa_aa_a' ]
console.log(r3.exec(s)); // [ 'aa', index: 4, input: 'aaa_aa_a' ]
console.log(r4.exec(s)); // null
var r5 = /a+_/y;
console.log(r5.exec(s)); // [ 'aaa_', index: 0, input: 'aaa_aa_a' ]
console.log(r5.exec(s)); // [ 'aa_', index: 0, input: 'aaa_aa_a' ]
// -------------------------------------------------------

// RegExp.prototype.sticky 属性

// 正则实例对象多了sticky属性，表示是否设置了y修饰符。
var r6 = /hello\d/y;
console.log(r6.sticky); // true
// -------------------------------------------------------

// RegExp.prototype.flags 属性

// 正则表达式新增了flags属性，会返回正则表达式的修饰符。
// ES5 的 source 属性,返回正则表达式的正文
console.log(/abc/gi.source); // abc
// ES6 的 flags 属性,返回正则表达式的修饰符
console.log(/abc/gi.flags); // gi
// -------------------------------------------------------

// s 修饰符：dotAll 模式
// 行终止符 有 换行符 回车符 行分隔符 段分隔符
console.log(/foo.bar/.test("foo\nbar")); // false
console.log(/foo[^]bar/.test("foo\nbar")); // true ^表示行首 $表示行尾
// s 修饰符,使得.可以匹配任意单个字符。
// console.log(/foo.bar/s.test("foo\nbar")); // true

// const re = /foo.bar/s;
// 上述相当于
// const re = new RegExp("foo.bar", "s");
// console.log(re.test("foo\nbar")); // true
// console.log(re.dotAll); // true
// console.log(re.flags); // s
