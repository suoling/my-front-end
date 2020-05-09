const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}
http.createServer(function (request, response) {
    console.log('requset host:', request.headers.host)
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8')
        response.writeHead(200, {
            'content-type': 'text/html',
        })
        response.end(html)
    } else if (request.url === '/data') {
        wait(2).then(() => {
            response.writeHead(200, {
                'cache-control': 's-maxage=200',  // s-maxage=20, private, no-store
                'Vary': 'X-Text-Cache'
            })
            response.end('success')
        })
    }
}).listen(8888)

console.log('server listening on 8888')