// Number.isFinite() ----- isFinite() 不同
// 前者只针对number数字。后者支持所有值，对于非数值，先转为number类型，然后在判断

// Number.isNaN() ----- isNaN() 不同
// 不同。前者只针对number数字。后者支持所有值，对于非数值，先转为number类型，然后在判断

// Number.parseInt() ----- parseInt() 等同

// Number.parseFloat() ----- parseFloat() 等同

// Number.isInteger() 用来判断一个数值是否为整数  25/25.0.25.000 被视为同一个值,都属于整数

// Number.EPSILON 极小的常量,它表示1与大于1的最小浮点数之间的差,和Math.pow(2, -52)近似相等

// Number.isSafeInteger() 判断一个数值是不是在安全范围之内
// Number.MAX_SAFE_INTEGER 表示最大值 Math.pow(2, 53)
// Number.MIN_SAFE_INTEGER 表示最小值 Math.pow(2, -53)

// Math对象的扩展
// Math.trunc() 用于去除一个数的小数部分，返回整数部分
// 对于非数值，Math.trunc内部使用Number方法将其先转为数值
// 对于空值和无法截取整数的值，返回NaN

// Math.sign() 用来判断一个数到底是正数、负数、还是零
// 对于非数值，会先将其转换为数值
// 返回的参数为 正数 -- +1、负数 -- -1、0 -- 0、-0 -- -0、其他值 -- NaN

// Math.cbrt() 用于计算一个数的立方根
// 对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值

// ath.clz32() 将参数转为32位无符号整数的形式，然后这个32位值里面有多少个前导0
// 左移运算符（<<）与Math.clz32方法直接相关
// 对于小数，Math.clz32方法只考虑整数部分
// 对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算

// Math.imul() 返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
// eg: Math.imul(-2, 2) // -4

// Math.fround() 返回一个数的32位单精度浮点数形式

// Math.hypot() 返回所有参数的平方和的平方根
// 如果参数不是数值，Math.hypot方法会将其转为数值
// 只要有一个参数无法转为数值，就会返回 NaN

// 对数方法

// 双曲函数方法

// 指数运算符
// 2 ** 3 ----- Math.pow(2, 3) 2的3次方
// 2 ** 3 ** 2 ----- 执行顺序，从右往左，相当于 2 ** (3 ** 2)
// b **= 3 ----- b = b * b * b
// a **= 2 ----- a = a * a
