const myArray = [2, 5, 7, 9, 3];

// Create a polyfills for map

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (myFunc) {
    const mapArray = [];
    for (let i = 0; i < this.length; i++) {
      const value = myFunc(this[i], i);
      mapArray.push(value);
    }
    return mapArray;
  };
}

const mapReturn = myArray.myMap(function (value, index) {
  return value * 2;
});

console.log(mapReturn);
