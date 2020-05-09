let a = 1;
let o = {
  a: 2,
  f(n){
    const b = ({n}) => {
      console.log('this:', this)
      const a = 111
      console.log('this.a:', this.a)
      this.a = n++;
    }
    return b;
  }
}
let x = o.f; // f函数
let y = x(3); // b函数
let z = y(4); // 没有return，默认返回undefined


// 以下打印什么？
console.log(window.a)   // undefined  因为只有在全局作用域下，var声明的变量和函数才会挂载在window下，而别的声明方式不会
console.log(o.a)  // 2  对象o中的a属性对应的值
console.log(x.a)  // undefined  只有原始数据类型不能设置属性，别的都可以，而x是f函数，可以设置属性
console.log(y.a)  // undefined  与上述同理，y此处是b函数
console.log(z.a)  // 报错 因为z是undefined，没有a属性