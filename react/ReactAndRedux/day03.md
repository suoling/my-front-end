# 第4章 开发服务器和热替换

- **历史** 在day02天的示例程序中，每次修改代码后，都必须执行一次`npm run buil`d命令进行编译，然后再刷新浏览器，开发调试效率非常低下。为了避免这种低效的重复工作，开发服务器(`webpack-dev-server`)和热替换(`hot reloading`)技术出现了
- **工作原理** 开发服务器能够在指定端口提供资源服务，配合热替换则可以自动监视代码的变动，重载被修改的模块，不仅不需要刷新浏览器，甚至连程序原来的状态都可以被保留下来（刷新浏览器会重置程序状态），极大地方便了开发调试

## 配置Babel

- **热替换** 是指当修改部分代码后，程序会自动编译，替换被修改的代码，不需要重新编译所有的代码，也不需要刷新浏览器。既然热替换涉及编译，所以首先应该配置Babel。

### 使用react-hmre预设

- 配置Babel使其支持热替换的最快捷的方法是使用react-hmre预设：

  .babelrc

  ```javascript
    {
        "presets": ["es2015", "react"],
        "env": {
            "presets": ["react-hmre"]
        }
    }
    // 上述配置在ES2015和React预设的基础上，增加了react-hmre这个预设，并且限制只在开发环境下使用
    // 注意，在此处并不一定非要使用react-hmre这个预设，也可以自己配置
  ```

- **功能** `热替换React模块`和`捕捉信息`

  ```javascript
  import React, { Component } from 'react';
  // 将无状态函数放在组件顶层，热替换将会出错。所以验证react-hmre的功能将用类组件
  // export default function App() {
  //   return <h1>hello world</h1>;
  // }
  export default class App extends Component {
    render() {
      // 1.热替换React模块功能
      // 配合react-hmre预设的配置信息（已删除），来验证react-hmre的热替换React模块的功能,结果在浏览器控制台里出现了警告信息,相关截图见img文件
      // console.log('Source Map Testing');
      // 2.捕捉信息功能
      // 尝试在组件中抛出一个错误对象，结果浏览器输出了警告页面，相关截图见img文件
      // throw new Error();
      return <h1>hello world</h1>;
    }
  }
  ```

## 配置Webpack

**背景** 开发服务器是可以为程序提供资源服务的服务器。通常情况下，在页面中引入的脚本文件等静态资源都放在硬盘中。但是使用了开发服务器，这些资源将被读到内存里，然后我们可以通过开发服务器的端口来访问这些资源。开发服务器结合热替换可以实现监视代码变动，即时更新界面的功能。因为开发服务器是通过Webpack实现的，因此搭建服务器前需要先配置Webpack

```javascript
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // devtool是开发工具，它的作用是生成源代码映射(Source Map)，方便调试
  // devtool的作用：源代码映射记录了打包编译后的代码和源代码之间的位置对应关系。它可以让你在控制台查找日志（或错误）来源时，直接跳转到源代码中，而不是打包编译后的代码。更多开发工具模式见img文件
  // cheap-module-eval-source-map，这个模式构件速度适中，而且会生成较好的源代码映射，适合在开发环境中使用
  entry: [ // 入口文件，以下是入口选项
    'webpack-hot-middleware/client',  
    // 用于进行热替换功能
    // 工作原理：先连接上服务器，等着接受需要重新编译代码的通知，一旦代码变动，就会收到通知进而更新客户端代码。
    './index.js' // 程序的入口文件
  ],
  output: { // 输出配置，以下是输出选项
    path: path.join(__dirname, 'dist'),
    // path表示输出的硬盘路径，不过该例中编译好的代码放在内存中，故此项无用
    filename: 'bundle.js',
    // 表示输出的文件名称
    publicPath: '/static/'
    // 表示公共路径，即所有资源的URL前缀
  },
  plugins: [ // 插件列表。被用于实现与打包相关的特定功能
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 用于给经常使用的模块分配最小长度的ID
    new webpack.HotModuleReplacementPlugin()
    // 用于热替换
  ],
  module: {
    loaders: [ // 加载器列表
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
        // __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
      }
      // 上述的意思是除了/node_modules/目录下的文件之外，其他所有符合/\.js$/正则表达式的文件都将使用babel-loader编译
    ]
  }
};
```

## 配置Express服务器

- 在配置完Webpack后，只需要在Express服务器中添加`webpackDevMiddleware`和`webpackhotMiddleware`两个中间件即可完成开发服务器和热替换的配置工作
- 在Express中，**中间件** 是服务器在收到请求（Request）和做出相应（Response）之间的一个`处理器`。Express中间件可以多个串联使用，它是Express框架最主要的一种拓展方式，我们可以使用中间件完成诸如`记录日志`、`内容压缩`等工作
- **webpackDevMiddleware功能** Webpack本身只有打包功能，但是把这个中间件连入Express服务器后，就可以将Webpack的打包功能与Express服务器的资源服务功能合二为一。Express服务器通过中间件完成打包工作，并将打包好的资源读到内存中，接下来我们就可以通过Express服务器的端口来访问这些资源了。不仅如此，该中间件还可以监视代码变动，一旦代码变动，就会停止提供旧版的资源服务，等到编译完成后继续提供新的资源服务
- **webpackhotMiddleware功能** webpackDevMiddleware中间件已经完成了大部分自动化工作，但是它无法实现热替换，也就是无法在更新代码后保留程序状态。为了实现热替换，还应该在webpackDevMiddleware中间件的基础上加上webpackhotMiddleware中间件

# 第5章 React的创新语法：JSX

## JSX简介

- 语法糖，React组件的标签名首字母要大写
- **优势** 可以让`组件的结构`和`组件之间的关系`看上去更加清晰
- JSX语法

  - 类似HTML

    - 可以嵌套，可以自定义属性（通过加上`data-前缀`的办法自定义属性）
    - 对于JavaScript中的保留字class和for，JSX语法中需要写成`className`和`htmlFor`

  - JavaScript表达式

    - 闭合标签中使用JavaScript表达式，要用{}所包裹
    - JavaScript表达式要求必须要返回值，故无法直接使用if else语句，但可以使用三元操作表达式以及||和&&这样的比较运算符
    - 如果确实需要if else语句，可以将其写在函数中，然后在{}中调用

  - 样式

    - 内联样式不是字符串，而是对象。而对象中的属性名需要使用驼峰命名法

  - 注释

    - 标签子节点内的注释应该写在大括号中（{}）

  - 数组

    - 数组会自动展开。注意，数组中每一项元素需要添加key属性。这样做是为React的DIFF算法服务的，React会通过唯一的key属性实现最高效的DOM更新

# 第6章 React的数据载体：state、props与context

- **state** 被称为内部状态或局部状态。"内部"表示它很少"跑"出组件，"状态"则意味着它经常变化。这些内部状态的操作与React的事件系统配合就可以实现一些用户交互的功能

  - `constructor`是ES2015类中的构造函数，它不仅在实例化一个类的时候被调用。另外，在子类的构造函数中，必须先调用super(),才能使用this获取实例化对象。这是ES2015类的一个规则。constructor是类的默认方法，通常无需编写。但是，如果想在构造函数中编写一些逻辑（比如，初始化内部状态、为组件方法绑定this等），就需要单独编写了
  - 随着无状态函数（无状态函数中没有内部状态）的提出和Redux的使用，内部状态的使用正在逐渐减少。但是内部状态在`非全局的数据管理更新中`仍扮演着重要的角色

- **props** 用于在组件间传递数据，但仅支持逐层传递

  - 使用props

    - 无状态函数编写的组件中获取props，只需要将props作为参数传入组件即可
    - 在使用类编写的组件中，需要通过this.props获取props。this是组件实例

  - **_验证props。后续着重看_**

- **context** 用于在组件间传递数据，支持逐层传递和跨级传递

  - 使用context

    - 无状态函数编写的组件中获取context，只需要将context作为参数传入组件即可
    - 在使用类编写的组件中，需要通过this.context和生命周期函数获取context。this是组件实例

- props与context的使用场景

  - React的context和全局变量非常相似，在大多数场景下，我们都应该尽量避免使用。适合使用context的场景包括传递登录信息、当前语言以及主题信息等。另外，react-redux的Provider组件就使用了context来传递store
  - 如果只是传递一些功能模块的数据，则尽量不要使用context，使用props传递数据会更加清晰和容易理解；而使用context则会使你的组件的复用性降低，因为这些组件依赖"上下文"，当你在别的地方渲染它们时，可能会出现一些差异

- 在React开发者工具中查看state、props、context

  - `React Developer Tools`插件
  - 此开发者工具的实用功能：可以清晰地看到每个组件的state、props与context等信息、追踪更新、查找组件
