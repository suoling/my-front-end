// 模块引入
var net = require('net');

var listenPort = 8080; // 监听端口
var socket_wsl = ''
var socket_yyy = ''
var map = new Map()
var server = net.createServer(function(socket){
  // 创建socket服务端
  console.log('connect: ' + socket.remoteAddress + ':' + socket.remotePort);
  socket.setEncoding('binary');
  if (!socket_wsl) {
    socket_wsl = socket
  } else if (!socket_yyy) {
    socket_yyy = socket
  }
  // 接收到数据
  socket.on('data',function(data){
    var sendInformation = JSON.parse(data)
    map.set(sendInformation.userId, socket)
    if (map.get(sendInformation.friendId)) {
      console.log(sendInformation.userName + ' send:' + sendInformation.message);
      map.get(sendInformation.friendId).write(data + '\r\n');
    } else {
      map.get(sendInformation.userId).write('your friend is not on line\r\n');
    }
  });
  // socket.pipe(socket);
  // 数据错误事件
  socket.on('error',function(exception){
    console.log('socket error:' + exception);
    // socket.end();
  });
  // 客户端关闭事件
  socket.on('close',function(data){
    console.log('client closed!');
     // socket.remoteAddress + ' ' + socket.remotePort);
  });
}).listen(listenPort);
// 服务器监听事件
server.on('listening',function(){
  console.log("server listening:" + server.address().port);
});
// 服务器错误事件
server.on("error",function(exception){
  console.log("server error:" + exception);
});
