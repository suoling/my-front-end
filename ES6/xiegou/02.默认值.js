let [foo = true] = [];
console.log(foo); // true

let [x, y = "b"] = ["a"];
console.log(x, y); // a b

let [q, w = "b"] = ["a", undefined];
console.log(q, w); // a b

let [e = 1] = [undefined];
console.log(e); // 1

let [r = 1] = [null];
console.log(r); // null

function f() {
  console.log("aaa");
}

let [h = f()] = [1];
console.log(h);

let d;
if ([1][0] === undefined) {
  d = f();
} else {
  d = [1][0];
}
console.log(d);

let [s = 1, v = s] = [];
console.log(s, v); // 1 1

let [o = 1, n = o] = [2];
console.log(o, n); // 2 2

let [m = 1, k = m] = [1, 2];
console.log(m, k); // 1 2

let [z = g, g = 1] = [];
console.log(z, g); //报错
