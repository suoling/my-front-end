const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
    console.log('requset host:', request.headers.host)
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8')
        response.writeHead(200, {
            'content-type': 'text/html',
            // 'Content-security-policy: 'script-src \'self\' https://cdn.bootcss.com/; form-action \'self\'; report-uri /report'  // 'default-src http: https:'
            // 'Content-security-policy-Report-Only'  资源被限制了,但是会被加载
        })
        response.end(html)
    } else {
        response.writeHead(200, {
            'content-type': 'application/javascript'
        })
        response.end('console.log("loaded script")')
    }
}).listen(8888)

console.log('server listening on 8888')