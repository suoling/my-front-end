const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    //把非标准JSON格式的输入转换成对象
    var obj = eval("(" + input + ")");
    var result=[];
    function xuliehua(data) {
        if(data.next) {
            // console.log(data.next.length);  //如果data.next为数组，data.next.length会返回一个数组的长度，如果data.next不是数组，name会返回undefined
            if(data.next.length) {
                result.push(data.node);
                for (var i = 0; i < data.next.length; i++)
                    xuliehua(data.next[i])
            }
            else {
                xuliehua(data.next)
            }
        }
    }
    xuliehua(obj);
    console.log(result);
});
