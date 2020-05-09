let name = "Bob",
  time = "today";
console.log(`Hello ${name}, how are you ${time}?`); // Hello Bob, how are you today

let greeting = `\`Yo\` World!`;
console.log(greeting); // `Yo` World!

let x = 1;
let y = 2;
console.log(`${x} + ${y} = ${x + y}`); // 1 + 2 = 3
console.log(`${x} + ${y * 2} = ${x + y * 2}`); // 1 + 4 = 5

let obj = { x: 1, y: 2 };
console.log(`${obj.x + obj.y}`); // 3

function fn() {
  return "Hello World";
}
console.log(`foo ${fn()} bar`); // foo Hello World bar

// let msg = `Hello, ${place}`;  变量place没有声明,所以报错

console.log(`Hello ${"World"}`); // Hello World

const tmpl = addrs => `
  <table>
  ${addrs
    .map(
      addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `
    )
    .join("")}
  </table>
`;
const data = [
  { first: "<Jane>", last: "Bond" },
  { first: "Lars", last: "<Croft>" }
];

console.log(tmpl(data));
// <table>

//  <tr><td><Jane></td></tr>
//  <tr><td>Bond</td></tr>

//  <tr><td>Lars</td></tr>
//  <tr><td><Croft></td></tr>

// </table>

let str = "return " + "`Hello ${name}!`";
let func = new Function("name", str);
console.log(func("Jack")); // Hello Jack!

let str1 = "(name) => `Hello ${name}!`";
let func1 = eval.call(null, str1);
console.log(func1("Jack")); // Hello Jack!
