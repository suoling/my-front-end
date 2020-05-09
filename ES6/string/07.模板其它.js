// 模板编译

// 标签模板，不是模板，是函数调用的一种特殊形式
// "标签"指的就是函数，紧跟在后面的模板字符串就是它的参数。
// alert`123` 等同于 alert(123)
let a = 5;
let b = 10;
tag`Hello ${a + b} world ${a * b}`;
// 等同于
tag(["Hello ", " world ", ""], 15, 50);

function tag(stringArr, value1, value2) {
  // ...
}
// 等同于
function tag(stringArr, ...values) {
  // ...
}

let x = 5;
let y = 10;
function tag(s, v1, v2) {
  console.log(s[0]); // 'Hello '
  console.log(s[1]); // ' world '
  console.log(s[2]); // ''
  console.log(v1); // 15
  console.log(v2); // 50
  return "OK";
}
console.log(tag`Hello ${x + y} world ${x * y}`); // OK

let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
function passthru(literals) {
  console.log(literals); // [ 'The total is ', ' (', ' with tax)' ]
  console.log(arguments);
  // { '0': [ 'The total is ', ' (', ' with tax)' ],
  //   '1': 30,
  //   '2': 31.5 }
  let result = "";
  let i = 0;
  while (i < literals.length) {
    result += literals[i++];
    // console.log(i, result);
    if (i < arguments.length) {
      result += arguments[i];
    }
  }
  return result;
}
console.log(msg); // The total is 30 (31.5 with tax)

function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index];
  return output;
}

// 模板字符串的限制
