function fn () {
  let [...args] = arguments
  console.log(args)
  console.log(...args)
}

fn()

// fn('a', 'b', 'c')

// fn(1, 2, 3, 4)