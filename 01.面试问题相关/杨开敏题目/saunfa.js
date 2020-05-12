// 代码有问题

var str = "[1, a, [2, 3], {name: wsl, age: 18}, b]"
// console.log(str)
var strArr = []
function arrLine (str) {
  let strChild = ''
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    switch (str[i]) {
      case '[':
        strChild = ''
        break;
      case ']':
        strChild = ''
        break;
      case ',':
        strArr.push(strChild)
        strChild = ''
        break;
      case ':':
        strChild += str[i]
        break;
      case '{':
        strChild += str[i]
        break;
      case '}':
        strChild += str[i]
        break;
      default:
        strChild += str[i]
    }
  }
  return strArr
}

console.log(arrLine(str))
