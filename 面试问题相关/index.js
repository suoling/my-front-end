const data = {
  a1: {
    b1: {
      c1: 1
    }
  },
  a2: {
    b2: {
      c2: {
        d2: 2
      }
    }
  },
  a3: {
    b3: 3
  },
  a4: 4
}

console.log(Object.keys(data).map(
    item => `data.${item}`
  )
)

function printUrl (obj) {
  for (const item in obj) {
    obj[item].url = `data.${item}`
    if (Object.prototype.toString.call(obj[item]) === '[object Object]') {
    
    }
    console.log(obj[item])
  }
}

printUrl(data)