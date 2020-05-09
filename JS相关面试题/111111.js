// 需求：把一个字符串分小数点前后两部分，每隔三位插入一个‘，’将其分开。
// 注意：本题需要考虑（1）是否存在小数点，（2）前后临界处不加‘，’。

let str = '123456.78920';

function fn(str){
    let arr = str.split('.');
    let left = '';
    let right = '';
    for(let i = arr[0].length-1; i >= 0; i--){
        left = arr[0][i] + left;   //注意是前插 而不是left += arr[0][i];
        if((arr[0].length-i)%3 === 0 && i > 0){
            left = ',' + left;
        }
    }
    if(arr.length === 2){
        for(let j = 0; j < arr[1].length; j++){
            right += arr[1][j];
            if(j % 3 === 2 && j !== 0 && j < arr[1].length-1){
                right += ','
            }
        }
        right = '.' + right;
    }
    let res = '$' + left + right;
    console.log(res);
    return res;
}
fn(str);

function fn2 (str) {
  let pointIndex = str.indexOf('.')
  let pointPre = str.slice(0, pointIndex)
  let pointNext = str.slice(pointIndex + 1)
  let left = ''
  let right = ''
  for (let i = pointPre.length - 1; i >= 0; i--) {
    if ((pointPre.length - 1 - i) !== 0 && (pointPre.length - 1 - i) % 3 === 0 && i !== 0) {
      left = pointPre[i] + ',' + left
    } else {
      left = pointPre[i] + left
    }
  }
  if () {

  }
  let strNew = '$' + left +  '.' + right
  console.log(strNew)
}

fn2(str)
