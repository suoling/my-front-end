const arr = [1, 2, 3, 4, 5, 6]

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i])
  }, 0)
}

// undefined
// undefined
// undefined
// undefined
// undefined
// undefined