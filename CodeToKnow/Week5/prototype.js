const dummyObject = {
  name: "Anyone",
  work: "Codeing",
  workTimeInHr: 10,
  beA: "Great Developer",
};

//Here we can call any property which are declare in the object itesel
console.log(dummyObject.name);
console.log(dummyObject.work);
console.log(dummyObject.workTimeInHr);
console.log(dummyObject.beA);

// Now call inbuild property of a string or say Prototype
console.log(dummyObject.name.toUpperCase());
// Here toUpperCase() is a protype of string

const person = {
  firstName: "SomeOne",
  lastName: "Any",
  age: 18,
  run: function () {
    return `${this.firstName} is running`;
  },
};

const mark = Object.create(person);

mark.firstName = "Mark";
mark.lastName = "Zukerberg";

console.log(mark.firstName);
