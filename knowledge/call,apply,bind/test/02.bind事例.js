let foo = {
  name: 'zl'
}

function func(job, age) {
  console.log(this.name);
  console.log(job, age);
}

// let bindFn = func.bind(foo, 'coder');  

// bindFn(45) //zl coder 45

// let bindFn1 = func.bind(foo, 'coder', 45);  

// bindFn1() //zl coder 45

let foo1 = {
  name: 'wsl'
}

bindFn = func.bind(foo, 'coder');  

foo1.fn = bindFn

foo1.fn(26)