let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz); // 1 2 3

let [, , third] = ["foo", "bar", "baz"];
console.log(third); // baz

let [x, , y] = [1, 2, 3];
console.log(x, y); // 1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1 [2, 3, 4]

let [i, j, ...k] = ["a"];
console.log(i, j, k); // a undefined []

let [bbb] = [];
console.log(bbb); // undefined ----切记

let [ccc, ddd] = [1];
console.log(ccc, ddd); // 1 undefined

let [q, w] = [1, 2, 3];
console.log(q, w); // 1 2

let [e, [r], t] = [1, [2, 3], 4];
console.log(e, r, t); // 1 2 4

let [p, o, l] = new Set(["a", "b", "c"]);
console.log(new Set(["a", "b", "c"])); //
console.log(p, o, l); // a b c

// let [foo] = 1; // 报错
// let [foo] = false; // 报错
// let [foo] = NaN; // 报错
// let [foo] = undefined; // 报错
// let [foo] = null; // 报错
// let [foo] = {}; // 报错
