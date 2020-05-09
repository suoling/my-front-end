let myMap = new Map().set(true, 7).set({ foo: 3 }, ["abc"]);
console.log(myMap); // Map { true => 7, { foo: 3 } => [ 'abc' ] }

// Map与数组之间的转换
// Map转数组
console.log([...myMap]); // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
// 数组转Map
let mapArr = [[1, "a"], ["b", { foo: 3 }]];
console.log(mapArr); // [ [ 1, 'a' ], [ 'b', { foo: 3 } ] ]
console.log(new Map(mapArr)); // Map { 1 => 'a', 'b' => { foo: 3 } }

// Map与对象之间的转换
// Map转对象
let obj = {};
myMap.forEach((item, index) => {
  console.log(index, item);
  obj[index] = item;
});
console.log(obj); // { true: 7, '[object Object]': [ 'abc' ] }
// 对象转Map
let mapObj = { a: 1, yes: 2, no: 3 };
let myMap1 = new Map();
Object.keys(mapObj).forEach(key => {
  myMap1.set(key, mapObj[key]);
});
console.log(mapObj); // { a: 1, yes: 2, no: 3 }
console.log(myMap1); // Map { 'a' => 1, 'yes' => 2, 'no' => 3 }

// Map与Json之间的转换
// Map转Json
let jsonObj = {};
myMap.forEach((item, index) => {
  console.log(index, item);
  jsonObj[index] = item;
});
console.log(JSON.stringify(jsonObj)); // {"true":7,"[object Object]":["abc"]}
// Map的键名有非字符串时，选择转为数组JSON
console.log(JSON.stringify([...myMap])); // [[true,7],[{"foo":3},["abc"]]]
// Json转Map
let mapJson = '{ "true": 7, "a": ["abc"] }';
let myMap2 = new Map();
Object.keys(JSON.parse(mapJson)).forEach(key => {
  myMap2.set(key, JSON.parse(mapJson)[key]);
});
console.log(mapJson); // { "true": 7, "a": ["abc"] }
console.log(myMap2); // Map { 'true' => 7, 'a' => [ 'abc' ] }
// 当整个Json为数组的话
let arrJson = '[["a", 1], ["b", 2], ["c", 3]]';
console.log(new Map(JSON.parse(arrJson))); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }
