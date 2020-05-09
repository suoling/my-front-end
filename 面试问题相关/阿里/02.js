// 请基于 React 编写一个图文列表组件，每一个列表项的左侧是图片、
// 右侧上部是一行标题下部是两行描术，要求组件能通用，比如用于显示文章列表或评论列表。

import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="left">
          <img src={img} alt="左侧的图片" />
        </div>
        <div className="right">
          <div className="right-top">
            <h2>一行标题</h2>
          </div>
          <div className="right-bottom">
            <p>第一行描述</p>
            <p>第二行描述</p>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
