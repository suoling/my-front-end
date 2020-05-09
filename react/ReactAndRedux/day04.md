# 第7章 React的两个对象：ReactElement与组件实例

## ReactElement

- ReactElement是什么

  - $$typeof为Symbol(react.element)的对象。不可变的普通对象
  - 描述了一个组件的实例或一个DOM节点。它只包含组件的类型（比如h1、或者App）、属性以及元素等信息
  - 不是组件的实例，不能在ReactElement中调用React组件的任何方法。它只是想告诉React你想在屏幕上显示什么

- ReactElement的两种类型

  - type属性是一个字符串，它表示了一个DOM节点，它的props属性对应了DOM节点的属性
  - type属性是一个表示组件的函数或类时。它表示了一个组件

- React组件的渲染流程

  - 当React遇到表示组件的ReactElement时，它会给这个ReactElement表示的组件一些props（有时候也包括context），然后问该组件渲染的ReactElement是什么。如果渲染的仍然是表示组件的ReactElement，那么将会一直问下去，直到了解所有组件要渲染的DOM元素为止。此时，React就可以使用react-dom或react-native这样的渲染模块来执行渲染了

     - 从上述渲染流程就可以看出，对一个组件而言，props就是输入，ReactElement就是输出。这个特性不仅清晰地表述了组件把数据熏染成视图的过程，而且还方便了性能优化

## 组件实例

- 组件实例简介

    - 组件实例是组件类的实例化对象，它通常被用来管理内部状态、处理生命周期函数。大多数情况下，我们无需直接创建组件实例，React会负责创建它。
    - 无状态函数没有实例化对象，因此无法使用晟敏周期函数
- 获取组件实例的方式

    - ReactDOM.render方法返回的就是组件实例
    - 某些方法中的this指向的是组件实例
    - 利用组件的Refs也可以获取组件实例
        - Refs属性可以是一个回调函数，也可以是一个字符串。利用Refs可以获取组件的实例（如果在DOM元素上使用Refs，将会获取相应的真实DOM节点）
