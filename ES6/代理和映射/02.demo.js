var request = require('request');
var httpGet = function(url){
    return new Promise(function(resolve, reject){
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              resolve(response.body)
            } else {
              reject(error)
            }
           })
    })
    
}

function createWebService(baseUrl) {
    return new Proxy({}, {
      get(target, propKey, receiver) {
        return () => httpGet(baseUrl+'/' + propKey);
      }
    });
  }



const service = createWebService('http://news.baidu.com');

// service.mil().then(json => {
//     console.log(json)
// });

service.finance().then(json => {
    console.log(json)
})