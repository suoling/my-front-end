const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function (request, response) {
    console.log('requset come:', request.url)
    const html = fs.readFileSync('test.html', 'utf-8') // 不设置'utf-8'的话,读取的文件是二进制文件
    response.writeHead(200, {
        'content-type': 'text/html',
        // 'X-Content-Type-Options': 'nosniff' // 浏览器不会主动去预测服务器返回的内容
        'content-encoding': 'gzip'
    })
    response.end(zlib.gzipSync(html))
}).listen(8888)

console.log('server listening on 8888')