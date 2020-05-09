// 请写一个函数，获取当前url的参数值，必须支持以下功能：
// 如果传了参数名则获取此参数名对应的参数值，如果不传，则获取所有参数

function getSearch() {
  let search = window.location.search;
  let searchArr = search.slice(1).split("&");
  let searchObj = {};
  searchArr.forEach(item => {
    Object.defineProperty(searchObj, item.split("=")[0], {
      value: item.split("=")[1]
    });
  });
  if (arguments.length > 0) {
    return searchObj[arguments[0]];
  } else {
    return searchObj;
  }
}
getSearch();
