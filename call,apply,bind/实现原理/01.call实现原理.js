Function.prototype.ca_ll = function() {
  // 剩余运算符，得到的是一个数组，包含除了this值的其他参数
  let [thisArgs, ...args] = arguments;
  if(!thisArgs) {
      thisArgs = typeof window === 'undefined' ? global : window;
  }
  thisArgs.func = this;
  let result = thisArgs.func(...args);
  delete thisArgs.func;  // thisArgs上并没有func属性，所以执行结果之后需要移除
  return result;
}

// 测试用例
var foo = {
  name: 'zl'
}

// function func(job, age) {
//   console.log(this.name);
//   console.log(job, age);
// }

// func.ca_ll(foo, 'coder', 45);  //zl coder 45

function func1() {
  console.log(this.name);
}

func1.ca_ll(foo); 
