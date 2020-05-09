// String.charCodeAt ----- String.codePointAt

// String.fromCharCode ----- String.formCodePoint

// normalize() NFC(默认参数，标准等价合成) NFD(标准等价分解) NFKC(兼容等价合成) NFKD(兼容等价分解)

// includes(char(s), index) index表示搜索的位置,针对index后的字符

// startsWith(char(s), index) index表示搜索的位置,针对前index后的字符

// endsWith(char(s), index) index表示搜索的位置,针对前index个字符

// repeat() 返回一个新字符串，表示将原字符串重复n次。参数如果是小数，向下取整
// 参数是负数或者Infinity，会报错。
// 0到-1之间的小数，取整为0；NaN取整为0；字符串先转数字再取整

// padStart() 用于字符串头部补全

// padEnd() 用于字符串尾部补全

// matchAll() 返回一个正则表达式在当前字符串的所有匹配

// 模板字符串

// String.raw() 往往用来充当模板字符串的处理函数，返回一个斜杠都被转义
// （即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
