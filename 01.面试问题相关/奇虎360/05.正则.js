// 使用正则检查字符串，只允许6--20位，且只能包含数字，字母，下划线

function testStr (str) {
  const regExp = /^\w{6,20}$/
  return regExp.test(str)
}

console.log(testStr('132ded'))