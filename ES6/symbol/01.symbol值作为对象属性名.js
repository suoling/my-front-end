// Symbol，表示独一无二的值

const mySymbol = Symbol();

let a = {};

a[mySymbol] = "hello";

console.log("a[mySymbol]:", a[mySymbol]); // hello

console.log("a:", a);
