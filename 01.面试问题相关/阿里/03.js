// 将类似以下JSON表示的树状结构（可以无限层级）通过parseDOM函数
// （使用document.createElement，document.createTextNode，appendChild等方法）
// 生成一颗DOM树（返回一个element元素）

const JsonTree = {
  tagName: "ul",
  props: {
    className: "list",
    "data-name": "jsontree"
  },
  children: [
    {
      tagName: "li",
      children: [
        {
          tagName: "img",
          props: {
            src: "//img.alicdn.com/tps/TB1HwXxLpXXXXchapXXXXXXXXXX-32-32.ico",
            width: "16px"
          }
        }
      ]
    },
    {
      tagName: "li",
      children: [
        {
          tagName: "a",
          props: {
            href: "https://www.aliyun.com",
            target: "_blank"
          },
          children: "阿里云"
        }
      ]
    }
  ]
};

function parseDOM(jsontree) {
  const { tagName, props, children } = jsontree;
  const element = document.createElement(tagName);
  if (arguments[1]) {
    arguments[1].appendChild(element);
  }
  if (props && Object.keys(props).length) {
    for (let key in props) {
      element.setAttribute(key, props[key]);
    }
  }
  if (children) {
    if (Array.isArray(children)) {
      children.forEach(item => {
        parseDOM(item, element);
      });
    } else {
      let textNode = document.createTextNode(children);
      element.appendChild(textNode);
    }
  }
  return element;
}

console.log(parseDOM(JsonTree));
