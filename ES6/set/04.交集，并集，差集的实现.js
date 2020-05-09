let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);

// 实现并集
let bingJi = new Set([...a, ...b]);
console.log("bingJi:", bingJi); // Set { 1, 2, 3, 4 }

// 实现交集
let jiaoJi = new Set([...a].filter(item => b.has(item)));
console.log("jiaoJi:", jiaoJi); // Set { 2, 3 }

// 实现差集
let chaJi = new Set([...a].filter(item => !b.has(item)));
console.log("chaJi:", chaJi); // Set { 1 }
