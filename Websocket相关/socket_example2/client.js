var net = require('net');
var port = 8080;
var host = '127.0.0.1';
var client= new net.Socket();
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var userMessage = {
  userName: '',
  userId: '',
  friendId: '',
  message: ''
}
// 创建socket客户端
client.setEncoding('binary');
// 连接到服务端
client.connect(port,host,function(){
  rl.on('line', function (input) {
    if (input.split(':')[0] === 'userName') {
      userMessage.userName = input.split(':')[1]
    } else if (input.split(':')[0] === 'userId') {
      userMessage.userId = input.split(':')[1]
    } else if (input.split(':')[0] === 'friendId') {
      userMessage.friendId = input.split(':')[1]
    } else {
      if (userMessage.userName === '') {
        console.log('please write your userName, for example: "userName:wsl"')
      } else if (userMessage.userId === '') {
        console.log('please write your userId, for example: "userId:0823"')
      } else if (userMessage.friendId === '') {
        console.log('please write your friendId, for example: "friendId:0902"')
      } else {
        if (userMessage.userName !== '' && userMessage.userId !== '' && userMessage.friendId !== '') {
          userMessage.message = input
          client.write(JSON.stringify(userMessage));
        }
      }
    }
  })
  // client.write('hello server, my name is wangsuoling');
  // 向端口写入数据到达服务端
});
client.on('data',function(data){
  // console.log('1111' + data)
  if (data.indexOf('your friend is not on line') === -1) {
    var receiveInformation = JSON.parse(data)
    console.log('from ' + receiveInformation.userName + ':'+ receiveInformation.message);
  }
  // 得到服务端返回来的数据
});
client.on('error',function(error){
// 错误出现之后关闭连接
  console.log('error:'+error);
  client.destory();
});
client.on('close',function(){
// 正常关闭连接
  console.log('Connection closed');
});
