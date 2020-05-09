Function.prototype.app_ly = function() {
  let [thisArgs, args] = arguments;
  let result;  // 函数返回结果
  if(!thisArgs) {
      thisArgs = typeof window === 'undefined' ? global : window;
  }
  thisArgs.func = this;
  if(!args) {
      // 第二个参数为null或者是undefined
      result = thisArgs.func();
  } else {
      result = thisArgs.func(...args);
  }
  delete thisArgs.func;
  return result;
}

// 测试用例
let foo = {
  name: 'zl'
}

// function func(job, age) {
//   console.log(this.name);
//   console.log(job, age);
// }

// func.app_ly(foo, ['coder', 45]);  //zl coder 45

function func1() {
  console.log(this.name);
}

func1.app_ly(foo); 
