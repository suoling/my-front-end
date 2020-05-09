const http = require('http')
const fs = require('fs')
http.createServer(function (request, response) {
    console.log('requset come:', request.url)
    const html = fs.readFileSync('test.html', 'utf-8') // 不设置'utf-8'的话,读取的文件是二进制文件
    const img = fs.readFileSync('test.jpg')
    if (request.url === '/') {
        response.writeHead(200, {
            'content-type': 'text/html',
            'connection': 'close'
        })
        response.end(html)
    } else {
        response.writeHead(200, {
            'content-type': 'image/jpg',
            'connection': 'close'
        })
        response.end(img)
    }
}).listen(8888)

console.log('server listening on 8888')