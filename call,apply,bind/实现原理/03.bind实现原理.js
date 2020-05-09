Function.prototype.my_bind = function() {
  var self = this, // 保存需要绑定的this上下文
  context = Array.prototype.shift.call(arguments),
  // arguments 是类数组对象，它没有 shift 等数组独有的方法，想要弹出传入的参数中的第一个参数，就只有用这种方式了。
  args = Array.prototype.slice.call(arguments); // 剩余的参数转为数组
  return function() {
    self.apply(context, Array.prototype.concat.call(args, Array.prototype.slice.call(arguments)));
  }
};

//样例
function a(m, n, o) {
  console.log(this.name + ' ' + m + ' ' + n + ' ' + o);
}

var b = {
  name: 'kong'
};

a.my_bind(b, 7, 8)(9); // kong 7 8 9
