// 问题：
// 设计一个函数，传入一个可序列化为树结构的字符串，将含有多个子节点的节点以数组的形式输出

var treeStr='{"node":"root","next":[{"node":"second_root"},{"node":"second_child","next":[{"node":"second_child_1","next":{"node":"second_child_1_1"}},{"node":"second_child_2"}]},{"node":"third_root","next":{"node":"third_child","next":[{"node":"third_child_1","next":{"node":"third_child_1_1"}},{"node":"third_child_2"}]}}]}'
var moreChildNodeArr = []
var treeObj=JSON.parse(treeStr)
function moreChildNode (treeObj) {
  for (let attr in treeObj) {
    if (attr === 'next' && Array.isArray(treeObj[attr])) {
      moreChildNodeArr.push(treeObj['node'])
      for (let i = 0; i < treeObj[attr].length; i++) {
        moreChildNode(treeObj[attr][i])
      }
    } else if (attr === 'next' && !Array.isArray(treeObj[attr])) {
      moreChildNode(treeObj[attr])
    }
  }
  return moreChildNodeArr
}

console.log(moreChildNode(treeObj))
