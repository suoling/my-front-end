let arr = [2, 3, 6, 4, "a", "c", 4, 6, "a", 5];

// 第一种方式
let setArr = new Set(arr);
let arrLength = setArr.size;
let arrNew = [...setArr];
console.log("arrLength:", arrLength);
console.log("arrNew:", arrNew);

// 第二种方式
let setArr2 = new Set();
arr.forEach(item => setArr2.add(item));
let arrNew2 = [];
for (let item of setArr2) {
  arrNew2.push(item);
}
console.log("arrNew2:", arrNew2);

// 简而言之，言而总之，数组去重如下：
// [...new Set(array)];
// eg:
let arrUnique1 = [...new Set([1, 3, 2, 3, 5, 1, 2, 3])];
console.log("arrUnique1:", arrUnique1);

// 数组去重，另一简洁的做法是利用Array.from()
let arrUnique2 = Array.from(new Set([1, 3, 2, 3, 5, 1, 2, 3]));
console.log("arrUnique2:", arrUnique2);
