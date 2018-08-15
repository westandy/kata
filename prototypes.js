class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return this.name + ',' + this.age;
  }
}

/*Person.prototype.toString = function() {
  return this.name + ',' + this.age;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}*/

const person = new Person('Andy', 40);
const person2 = new Person('Jeff', 41);
console.log(person.toString(), person2.toString());
