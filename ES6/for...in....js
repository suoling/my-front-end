// for...in循环
// 遍历对象的所有可枚举属性（包括自身的，还有从构造函数的原型中继承的）

Array.prototype.arrFun = () => {};
Array.prototype.arrAttr = "我是新添加的属性";

const arr = [2, "a", { s: 3 }];

for (const key in arr) {
  console.log(key); // 0 1 2 arrFun arrAttr
}
