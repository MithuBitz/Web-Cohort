// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

//Named Exports
// exports.add = add;
// exports.subtract = subtract;

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};
    
// Default export
module.exports = { add, sub };
