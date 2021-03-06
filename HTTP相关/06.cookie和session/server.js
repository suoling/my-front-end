const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('requset come:', request.url)
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8') // 不设置'utf-8'的话,读取的文件是二进制文件
        response.writeHead(200, {
            'content-type': 'text/html', // text/plain --- 解析为纯字符
            'set-cookie' : ['id=123;max-age=2', 'abc=456;httpOnly;domain="test.com"']
        })
        response.end(html)
    }
}).listen(8888)

console.log('server listening on 8888')