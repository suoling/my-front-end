function add(x,y) {
  return x + y;
}

// add函数的柯里化函数_add则可以如下：
function _add(x) {
  return function (y) {
    return x + y
  }
}

// 下面的运算方式是等价的。
add(1, 2);
_add(1)(2);