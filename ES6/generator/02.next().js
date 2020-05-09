function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}

var a = foo(5);
console.log(a.next()); // { value: 6, done: false }
console.log(a.next()); // { value: NaN, done: false }
console.log(a.next()); // { value: NaN, done: false }

var b = foo(5);
console.log(b.next()); // { value: 6, done: false }
console.log(b.next(6)); // { value: 4, done: false }
console.log(b.next(10)); // { value: 27, done: true } 10 + 12 + 5
