class Person {
  getFullName() {
    return "Hello";
  }
}

const p1 = {};

p1.__proto__ = Person.prototype;

console.log(p1.getFullName());

// But the syntextic sugar for this is

const p2 = new Person();

console.log(p2.getFullName());
