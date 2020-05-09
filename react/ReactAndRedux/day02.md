# 第2章 在Node.js中运行React

## 编写React组件

- 如果组件中只有一个render()方法，可以将其改为更简洁的`无状态函数`

  - 只有一个render()方法的React类组件

    ```javascript
    import React from 'react'

    export default class APP extends React.Component {
    render () {
      return (
          <h1>hellow world</h1>
        )
      }
    }
    ```

  - 由上述的React组件而更改的无状态函数

    ```javascript
    import React from 'react';

    export default function APP () {
      return <h1>hellow world</h1>;
    }
    ```

  - 上述两段代码中的`default`表示你可以在别的文件中使用`import App from './App'`导入这个模块；如果没有default，则需要用`import {App} from './App'`

## 在Node.js中渲染组件

- 在Node.js中，应该使用`renderToString()方法`将组件渲染成字符串

  ```javascript
  import React from 'react';
  import { renderToString } from 'react-dom/server';
  import App from './App';

  const appHTML = renderToString(<App />);
  console.log(appHTML);
  ```

## 使用Babel编译运行Node.js程序

- Require Hook (Babel的一个内建工具)

  - **作用** 用于在`测试环境`下编译运行Node.js程序
  - **工作原理** 在require方法上加上一个钩子。此后，每次使用require加载JavaScript文件时，就会先用Babel进行编译
  - **优势** 将`编译`和`运行`这两个步骤合二为一。不过注意，因为性能消耗较大的原因，这个方法只能用于测试环境。如果要在生产环境中运行Node.js程序，需要先编译再运行。

- 使用Require Hook的步骤

  - 安装babel-register

    ```shell
    npm  install babel-register --save-dev
    ```

  - 在入口文件顶部添加require("babel-register")

    ```javascript
    require('babel-register')
    require('./src/server.js')
    ```

  - 安装ES2015和React的预设

    ```shell
    npm install --save-dev babel-preset-es2015 babel-preset-react
    ```

  - 添加配置文件.babelrc，激活ES2015和React的预设

    ```javascript
    { "preset": ["react", "es2015"] }
    ```

  - ES2015和React的预设分别用于编译ES2015语法和JSX语法
  - 预设是插件的打包封装。插件或者预设是编译任务的核心"执行者"。如果没有配置插件或者预设，即便运行Babel，也只是复制了源代码而已

# 第3章 在浏览器中运行React

## 组件化的优点

- 便于复用
- 分开管理代码
- 减小耦合度

  事实上，任何能撑起大型项目的框架、类库都会提供`组件化`或`模块化`的解决方案

## 在浏览器中渲染React组件

src/client.js

```javascript
import React from 'react';
import { render } from 'react-dom'; // 渲染组件到DOM节点中时使用了react-dom的render()方法
import App from './App';

render ((<App />), document.querySelector('#app'));
// 以上代码将<App />渲染到id为app的标签中
```

index.html

```html
<div id="app"></div>
```

## 使用Webpack打包编译

- 概述

  - 因为Webpack本身只有打包功能，所以这里还需要通过引入babel-loader来实现编译功能。使用babel-loader不是必需的，假如先使用Babel CLI编译源代码，再使用Webpack打包，就不需要再配置babel-loader了。

- 使用Webpack和babel-loader打包编译程序的具体步骤

  - 安装Webpack和babel-loader：

    ```shell
    npm install --save-dev webpack babel-loader babel-core
    ```

  - 添加webpack.config.js文件来指定打包编译的配置信息：

    ```javascript
    module.exports = {
      entry: './src/client', // 入口文件
      output: {
         path: __dirname + './static/dist', // 输出目录
         filename: 'main.js' // 输出的文件名称
      },
      module: {
          loaders: [ // 以下这部分配置信息是用于babel-loader的
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loaders: ['babel']
             }
             // 上述的意思是除了/node_modules/目录下的文件之外，其他所有符合/\.js$/正则表达式的文件都将使用babel-loader编译
        ]
      }
    };
    ```

  - 安装ES2015和React的预设：

    ```shell
    npm install --save-dev babel-preset-es2015 babel-preset-react
    ```

  - 添加配置文件.babelrc：

    ```javascript
    { "preset": ["react", "es2015"] }
    ```

## 在浏览器中运行

打包编译工作完成后，我们将生成的JavaScript脚本文件添加到index.html文件中。

```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>React Demo</title>
  </head>

  <body>
    <div id="app"></div>
    <script src="static/dist/main.js"></script>
  </body>
  </html>
```
