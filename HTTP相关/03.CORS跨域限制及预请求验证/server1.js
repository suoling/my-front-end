const http = require('http')
http.createServer(function (request, response) {

    console.log('requset come:', request.url)
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',  // 'http://127.0.0.1:8888'  '*'  'http://www.baidu.com'
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        'Access-Control-Allow-Methods': 'PUT, Delete',
        'Access-Control-Max-Age': '1000' // 在限定时间内不再进行预请求
    })
    response.end('123')
}).listen(8887)

console.log('server listening on 8887')