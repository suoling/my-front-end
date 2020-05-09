const http = require('http');
// 引入url模块：url是对用户提交的路径进行解析
const url = require("url");
// 引入qs模块：qs是对路径进行json化或者将json转换为string路径
const qs = require("querystring");

http.createServer(function (request, response) {
    console.log('requset come:', request.url, request.method)
    if (request.method == "GET") {
        var result = url.parse(request.url, true);
        console.log('result.query:',result.query)
        console.log('request.url:', request.url)
        if (request.url === '/new') {
            console.log('request.url:', request.url)
            // 获取前端发来的路由地址
            let pathName = request.url;
            console.log("\n接口为：" + pathName);

            // 接收发送过来的参数
            let tempResult = "";

            // 数据接入中
            request.addListener("data", function (chunk) {
                tempResult += chunk;
            });

            // 数据接收完成
            request.addListener("end", function () {
                console.log('tempResult:', tempResult)
                var result = JSON.stringify(qs.parse(tempResult));
                console.log(result);
                response.writeHead(200, {
                    'Access-Control-Allow-Origin': '*'
                })
                response.end(result)
            });
        } else {
            response.end(request.url)
        }
    }
}).listen(8888)

console.log('server listening on 8888')