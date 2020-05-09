// 匹配中国大陆手机号码,手机号码开头为137,157,143
function phoneRegexp (phone) {
  let regExp = /^137|157|143\d{8}$/
  return regExp.test(phone)
}
// 匹配邮箱 admin@qq.com
function emailRegexp (email) {
  let regExp = /^\w{4,}@\w+\.(com|cn)$/
  return regExp.test(email)
}
// 匹配中文姓名
function chNameRegexp (name) {
  let regExp = /^[\u4e00-\u9fa5]{2,4}$/
  return regExp.test(name)
}
// 匹配所有的Java开头的字符串。但是Java后面不能跟Script,script
function fxdyRegexp (str) {
  let regExp = /^(Java)(?!([Ss]cript))\w*/
  return regExp.test(str)
}
// 判断一个字符串是否在(),{},[],'',""中
function yyRegexp (str) {
  let regExp = /(['"])[^'"]*\1|\(\w*\)|\{\w*\}|\[\w*\]/
  return regExp.test(str)
}
// 将2019-08-23 转换成 2019年08月23日
function dateRegexp (date) {
  let regExp = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/
  let result = date.replace(regExp, '$<year>年$<month>月$<day>日')
  return result
}
// 给一个连字符串例如：get-element-by-id转化成驼峰形式。
function tfRegexp (str) {
  let regExp = /-\w/g
  let result = str.replace(regExp, (tmp) => {
    return tmp.slice(1).toUpperCase()
  })
  return result
}
// 匹配二进制数字(不能以0开头)
function ejzRegexp (num) {
  let regExp = /^1([01]{1,})/
  return regExp.test(num)
}
// 非零的十进制数字 (有至少一位数字, 但是不能以0开头)
function sjzRegexp (num) {
  let regExp = /^[1-9][0-9]*$/
  return regExp.test(num)
}
// 匹配一年中的12个月
function monthRegexp (num) {
  let regExp = /^(1[0-2]|0?[1-9])$/
  return regExp.test(num)
}
// 匹配用尖括号括起来的以a开头的字符串
function aeleRegexp (str) {
  let regExp = /<a\s*(href=".+")?\s*>.*(<\/a>)?/
  return regExp.test(str)
}

