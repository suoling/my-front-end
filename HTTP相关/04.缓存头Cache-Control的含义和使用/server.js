const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('requset come:', request.url)
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8') // 不设置'utf-8'的话,读取的文件是二进制文件
        response.writeHead(200, {
            'content-type': 'text/html' // text/plain --- 解析为纯字符
        })
        response.end(html)
    }
    if (request.url === '/script.js') {
        response.writeHead(200, {
            'content-type': 'text/javascript',
            'cache-control': 'max-age=20' // 'max-age=20, public, ....'
        })
        response.end('console.log("script loaded")')
    }
}).listen(8888)

console.log('server listening on 8888')