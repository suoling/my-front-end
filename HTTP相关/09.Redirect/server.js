const http = require('http')

http.createServer(function (request, response) {
    console.log('requset come:', request.url)
    if (request.url === '/') {
        response.writeHead(302, {  // 302 临时跳转  // 301 永久跳转 --使用时 要谨慎
            'Location': '/new'
        })
        response.end('')
    }
    if (request.url === '/new') {
        response.writeHead(200, {
            'content-type': 'text/html'
        })
        response.end('<div>this is content</div>')
    }
    
}).listen(8888)

console.log('server listening on 8888')