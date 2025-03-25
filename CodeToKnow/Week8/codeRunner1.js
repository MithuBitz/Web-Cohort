// 01-Mar

function increment() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = increment(); // Hold the return fuction value in conter
counter();
counter();
counter();


function createCounter(startValue = 0, incrementValue = 1) {
    return function () {
        startValue += incrementValue;
    }
}