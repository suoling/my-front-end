function Person (name) {
  this.name = name
}

Person.prototype = {
  getName () {
    console.log(this.name)
  }
}

function Teacher (name, age) {
  Person.call(this, name)
  this.age = age
}

Teacher.prototype = new Person()

// Teacher.prototype.constructor = Teacher

var teacher = new Teacher('wsl', 26)

console.log(teacher)

