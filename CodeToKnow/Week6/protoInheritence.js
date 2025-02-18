const aObject = {
  name: "A Object",
  getTheObjectName: function () {
    return this.name;
  },
};

console.log(aObject);
console.log(aObject.__proto__);
console.log(aObject.getTheObjectName());

const bObject = {
  __proto__: aObject,
};

console.log(bObject);
