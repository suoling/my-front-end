function strReserve (str) {
  if (typeof str !== 'string') {
    return false
  } else {
    var result = ''
    for (var i = str.length - 1; i >= 0 ; i--) {
      result += str[i]
    }
    return result
  }
}

console.log(strReserve('suoling'))
