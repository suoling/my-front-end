var a = {
  b: function() {
    var func = function() {
      console.log(this.c);
    }
    func();
  },
  c: 'hello'
}
a.b();   // undefined 这里的this指向的是全局作用域
console.log(a.c);   // hello
