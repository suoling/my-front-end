const arrTest = [[1, 3], 2, 5, [6], [7, 4, 3], 9];

function* arrLine(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      yield* arrLine(arr[i]);
    } else {
      yield arr[i];
    }
  }
}

// 方式一
let arrNew = [];
for (const item of arrLine(arrTest)) {
  arrNew.push(item);
  console.log(item); // 1 3 2 5 6 7 4 3 9
}
console.log("arrNew:", arrNew); // [ 1, 3, 2, 5, 6, 7, 4, 3, 9 ]

// 方式二
console.log([...arrLine(arrTest)]); // [ 1, 3, 2, 5, 6, 7, 4, 3, 9 ]
