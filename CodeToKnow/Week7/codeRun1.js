// 22 Feb
// console.log(Math.random() * 6);

// Curring in JS

const multiply = (x) => {
  return (y) => {
    return x * y;
  };
};

const multiplyTwoNfive = multiply(2)(5);
// console.log(multiplyTwoNfive);

const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

// filter or remove an object which name is "Pamela using normal function"
// filterList = list.filter((item) => item.name !== "Pamela");
// console.log(filterList);

// But if we remove other object then we can go each time on code block and manually change the name Now here the Curring is usefull
//Curring function
const filtering = (name) => (item) => item.name !== name;

const filterByName = (list, name) => {
  return list.filter(filtering(name));
};

const filterListUsingCurring = filterByName(list, "John");
// console.log(filterListUsingCurring);

// Math.max()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxNumber = Math.max(...numbers);
// const maxNumber = Math.max(numbers); // This not work
// console.log(maxNumber);

// Math.min()
const minNumber = Math.min(...numbers);
// console.log(minNumber);

// Math.random()
const random = Math.random();
// console.log(random); // Return a random number between 0 and 1

const randomNumberBetween2to5 = Math.random() * (5 - 2) + 2;
// console.log(randomNumberBetween2to5);

// ForEach
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  //   console.log(copy);

  const propNames = Object.getOwnPropertyNames(obj);
  //   console.log(propNames);

  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    // console.log(desc);

    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
// console.log(obj2);

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4];
// console.log(arr2);

const object4distruct = { a: 1, b: 2 };
const { a, b } = obj1;
console.log(a, b);
