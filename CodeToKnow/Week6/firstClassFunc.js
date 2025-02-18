Function.prototype.greet = function () {
  return `Hellow function ${this.name}`;
};

const greetFun = function () {};

console.log(greetFun.greet());

// Apply Operation

function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result = applyOperation(5, 2, (x, y) => x * y);
console.log(result);

// Tifin function

function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const count = createCounter();
console.log(count);
