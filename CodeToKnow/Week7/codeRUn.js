// 22 Feb
// console.log(Math.random() * 6);

// Curring in JS
const list = [
  {
    id: 1,
    name: 'Steve',
    email: 'steve@example.com',
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com',
  },
  {
    id: 3,
    name: 'Pamela',
    email: 'pam@example.com',
  },
  {
    id: 4,
    name: 'Liz',
    email: 'liz@example.com',
  },
];

// filter or remove an object which name is "Pamela using normal function"
list.filter((item) => item.name !== "Pamela")


let salesData = [
  { product: "laptop", price: 200 },
  { product: "mobile", price: 100 },
];

let totalSales = salesData.reduce(
  (totalPrice, price) => totalPrice + price.price,
  0
);
// console.log(totalSales);

let inventory = [
  { name: "Widget A ", stock: 30 },
  { product: "Widget A", stock: 120 },
];

let lowStockITems = inventory.filter((item) => item.stock < 50);
// console.log(lowStockITems[0]);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];

// find most active user by using reduce

let mostActiveUser = userActivity.reduce((acc, acivity) =>
  acivity.activityCount > acc.activityCount ? acivity : acc
);

console.log(mostActiveUser);



// 23-Feb

let expanses = [
  {description: "Groceries", amount: 50, category: "Food"},
  {description: "Electricity Bill", amount: 100, category: "Utilities"}, 
  {description: "Dinner", amount: 30, category: "Food"},
  {description: "Internet Bill", amount: 50, category: "Utilities"},
]

// let expanseReport = expanses.reduce((acc, expense) => {
//   if(expanse.category == "Food") {
//     acc += expense.amount
//   } else if(expanse.category == "")
// }

let tasks = [
  { description: "Write report", completed: false, priority: 2},
  
]

let pendingSortedTasks = tasks.filter((task) => !task.completed).sort((a,b) => a.priority - b.priority)

//Find average rating
let movieRatings = [
  { title: "Movie A", rating: [4, 5, 3] },
  { title: "Movie B", rating: [5, 5, 4] },
  { title: "Movie A", rating: [3, 4, 2] },
]


let person1 = {
  name : "Mithu",
  greet : function () {
    console.log(`Hello ${this.name}`);
    
  }
}

let person2 = {
  name : "Anurag"
}

//insert greet into person2
person1.greet.call(person2)