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
        const etag = request.headers['if-none-match']
        if (etag === '777') {
            response.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=2000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('')
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=2000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('console.log("script loaded")')
        }
    }
}).listen(8888)

console.log('server listening on 8888')