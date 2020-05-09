let str = "javascript";

// 方式一
let setStr = new Set(str);
let uniqueStr = "";
for (const item of setStr) {
  uniqueStr += item;
}
console.log("uniqueStr:", uniqueStr);

// 简而言之，言而总之，字符串去重
// [...new Set(string)].join("");
// eg:
let strUnique = [...new Set("abhcbcd")].join("");
console.log("strUnique:", strUnique);
