// const forEachReturn = arr1.forEach(function (value, index) {
//     console.log(`Value at Index ${index} is ${value}`);
// })

// Now lets make a polyfill for forEach
//because forEach is available in my browser so need to reaname it to forEachMine which have same functionality
if (!Array.prototype.forEachMine) {
  Array.prototype.forEachMine = function (userFunc) {
    const originalArray = this;

    for (let i = 0; i < originalArray.length; i++) {
      userFunc(originalArray[i], i);
    }
  };
}

const arr1 = [1, 2, 3, 4, 5, 6];

const myForEachReturn = arr1.forEachMine(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});


