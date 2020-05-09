// 遍历器生成函数：keys() values() entries()
// 遍历方法：forEach()
// Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法
// map[Symbol.iterator] === map.entries  // true

let mapData = new Map([
  ["name", "wsl"],
  ["age", 27],
  ["sex", "women"],
  ["address", "shanxi"]
]);

// keys()
for (let key of mapData.keys()) {
  console.log(key); // name age sex address
}

// values()
for (let value of mapData.values()) {
  console.log(value); // wsl 27 women shanxi
}

// entries()
for (let entrie of mapData.entries()) {
  console.log(entrie); // [ 'name', 'wsl' ] [ 'age', 27 ] [ 'sex', 'women' ] [ 'address', 'shanxi' ]
}

// entries()
for (let [key, value] of mapData.entries()) {
  console.log([key, value]); // [ 'name', 'wsl' ] [ 'age', 27 ] [ 'sex', 'women' ] [ 'address', 'shanxi' ]
}

// mapData
for (let [key, value] of mapData) {
  console.log([key, value]); // [ 'name', 'wsl' ] [ 'age', 27 ] [ 'sex', 'women' ] [ 'address', 'shanxi' ]
}

// forEach(),可以接受第二个参数，用来指定this
mapData.forEach((item, index) => {
  console.log(index + "--" + item);
  // name--wsl age--27 sex--women address--shanxi
});

// Map结构转数组结构，快速通用的方法是使用扩展运算符(...)
console.log([...mapData.keys()]); // [ 'name', 'age', 'sex', 'address' ]
console.log([...mapData.values()]); // [ 'wsl', 27, 'women', 'shanxi' ]
console.log([...mapData.entries()]); // [ [ 'name', 'wsl' ],[ 'age', 27 ],[ 'sex', 'women' ],[ 'address', 'shanxi' ] ]
console.log([...mapData]); // [ [ 'name', 'wsl' ],[ 'age', 27 ],[ 'sex', 'women' ],[ 'address', 'shanxi' ] ]

// Map数据结构 可以利用数组的map和filter方法实现Map数据结构的遍历和过滤
let mapData1 = new Map();
mapData1
  .set(1, "a")
  .set(2, "b")
  .set(3, "c");
// 利用数组的map方法
let map_mapData1 = new Map(
  [...mapData1].map(([key, value]) => [key * 2, "_" + value])
);
console.log(map_mapData1); // Map { 2 => '_a', 4 => '_b', 6 => '_c' }
// 利用数组的filter方法
let filter_mapData2 = new Map([...mapData1].filter(([key, value]) => key > 2));
console.log(filter_mapData2); // Map { 3 => 'c' }
