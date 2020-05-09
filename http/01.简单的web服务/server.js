const http = require('http');
// 引入url模块：url是对用户提交的路径进行解析
const url = require("url");

const server = http.createServer((request, response) => {
  console.log('request.url:', request.url)
  // console.log('request.method:', request.method)
  if (request.method === 'GET') {
    const result = url.parse(request.url)
    // console.log('result.query:',result.query)
    console.log('result.query:',result.hash)
  }
  response.end('111')
})

server.listen(8888)

console.log('server listening on 8888')