// 属性：size add delete has clear
let set = new Set();
set
  .add(1)
  .add(2)
  .add(3); // 添加某个值，返回 Set 结构本身
console.log(set); // Set { 1, 2, 3 }
console.log(set.size); // 3 返回Set实例的成员总数
console.log(set.delete(3)); // true 删除某个值，返回一个布尔值，表示删除是否成功。
console.log(set.has(3)); // false 返回一个布尔值，表示该值是否为Set的成员。
console.log(set.has(2)); // true 返回一个布尔值，表示该值是否为Set的成员。
console.log(set.clear()); // undefined 清除所有成员，没有返回值。
console.log(set); // Set {}

// 方法：keys() values() entries() forEach() map() filter()
// Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法
// Set.prototype[Symbol.iterator] === Set.prototype.values  // true
