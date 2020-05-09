## react生命周期

#### 挂载：当组件实例被创建并插入 DOM 中时

- constructor()
    - 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数
- static getDerivedStateFromProps()
- render()
    - 唯一必须实现的方法
    - 应该为纯函数，在不修改state的情况下，每次调用时都返回相同的结果
    - 不会直接与浏览器交互
- componentDidMount()

*componentWillMount()即将过时*

#### 更新：当组件的 props 或 state 发生变化时会触发更新

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

*componentWillUpdate()，componentWillReceiveProps()即将过时*

#### 卸载：当组件从 DOM 中移除时

- componentWillUnmount()

#### 错误处理：当渲染过程，生命周期，或子组件的构造函数中抛出错误时

- static getDerivedStateFromError()
- componentDidCatch()


### render渲染函数什么时候执行

### 虚拟DOM是怎么渲染的

### setState是同步的，还是异步的

### 高阶组件用过么？他有什么作用

### redux数据管理的流程

### 继承方式有哪些

### 箭头函数和普通函数的区别

### promise相关

### 题目