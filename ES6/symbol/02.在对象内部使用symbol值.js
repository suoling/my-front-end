let s = Symbol();

// let obj = {
//   [s]: function(arg) {
//     console.log(arg);
//   }
// };

let obj = {
  [s]: arg => {
    console.log(arg);
  }
};

obj[s](123); // 123

let objSymbol = Object.getOwnPropertySymbols(obj);
console.log("obj:", obj[s]);
console.log("objSymbol:", objSymbol);
