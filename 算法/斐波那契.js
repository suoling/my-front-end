function fibonacci (n) {
    if ( n == 1 || n == 2 ) {
      return 1
    } else if ( n > 2 ) {
      return fibonacci(n - 1) + fibonacci(n - 2)
    }
  }
  
  function fibonacci2 (n) {
    if ( n == 1 || n == 2 ) {
      return 1
    } else if ( n > 2 ) {
      var pre = 1
      var next = 1
      var result
      for (var i = 3 ; i <= n; i++) {
        result = pre + next
        pre = next
        next = result
      }
      return result
    }
  }

var start = new Date().getTime()
console.log(fibonacci(30))
var end = new Date().getTime()
console.log(end - start)

start = new Date().getTime()
console.log(fibonacci2(30))
end = new Date().getTime()
console.log(end - start)
