// ES5的正则表达式，只支持先行断言 和 先行否定断言,不支持 后行断言 和 后行否定断言
// ES2018引入了 后行断言 和 后行否定断言
// 先行断言，指的是 x只有在y前面才匹配，必须写成/x(?=y)/
//     只匹配百分号之前的数字，要写成/\d+(?=%)/
// 先行否定断言，指的是，x只有不在y前面才匹配，必须写成/x(?!y)/
//     只匹配不在百分号之前的数字，要写成/\d+(?!%)/
console.log(/\d+(?=%)/.exec("100% of US presidents have been male"));
// [ '100',
//   index: 0,
//   input: '100% of US presidents have been male' ]
console.log(/\d+(?!%)/.exec("that’s all 44 of them"));
// [ '44', index: 11, input: 'that’s all 44 of them' ]

// 后行断言，指的是，x只有在y后面才匹配，必须写成/(?<=y)x/
//     只匹配美元符号之后的数字，要写成/(?<=\$)\d+/
// 后行否定断言，指的是，x只有不在y后面才匹配，必须写成/(?<!y)x/
//     只匹配不在美元符号后面的数字，要写成/(?<!\$)\d+/
// console.log(/(?<=\$)\d+/.exec("Benjamin Franklin is on the $100 bill"));
// [ '100',
//   index: 29,
//   input: 'Benjamin Franklin is on the $100 bill' ]
// console.log(/(?<!\$)\d+/.exec("it’s is worth about €90"));
// [ '90',
//   index: 21,
//   input: 'it’s is worth about €90' ]

// 后行断言 实现 字符串 的 替换
// const RE_DOLLAR_PREFIX = /(?<=\$)foo/g;
// console.log("$foo %foo foo".replace(RE_DOLLAR_PREFIX, "bar")); // '$bar %foo foo'
