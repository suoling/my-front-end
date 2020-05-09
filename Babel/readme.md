### Babel转码器

- 作用：Babel可以将ES6代码（或者最新标准编写的JS代码）转换编译为ES5代码，从而在老版本的浏览器执行
- 模块：
  - `@babel/cli` 用于命令行转码
  - `@babel/node` 支持Node环境，可直接运行ES6代码
  - `@babel/register` 对require命令加载的文件转码
    ```js
    // index.js
    // 使用时，必须首先加载@babel/register。
    // 然后，就不需要手动对index.js转码了。
    require('@babel/register');
    require('./es6.js');
    ```
  - `@babel/polyfill` 转换新的API
  - `@babel/core` 调用Babel的API进行转码
  - `@babel/preset-env` 用于解析ES6
  - `@babel/preset-react` 用于解析JSX
  - `babel-loader` 加载器
