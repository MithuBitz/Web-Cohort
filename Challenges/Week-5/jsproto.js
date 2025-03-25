// function Animal(name) {
//   // Initialize name property
//   this.name = name;
// }

// Animal.prototype;

// // You need to implement the Robot constructor function and its prototype method

// function Robot(name, batteryLevel) {
//   // Initialize name and batteryLevel properties
//   this.name = name;
//   this.batteryLevel = batteryLevel;
// }

// // Define charge method on Robot's prototype
// Robot.prototype.charge = function () {
//   // Increment batteryLevel
//   if (this.batteryLevel < 100) {
//     this.batteryLevel += 20;
//   }
// };

function Counter() {
  // Initialize count property with 0
  this.count = 0;
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function () {
  // Increment count
  this.count++;
};

// Define decrement method on Counter's prototype
Counter.prototype.decrement = function () {
  // Decrement count
  this.count--;
};

console.log(Counter.increment());


function ShoppingCart() {
    // Initialize items property
    this.items = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price) {
  this.items.push(price)
}

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function() {
  return this.items.reduce((total, price) => total + price, 0);
}

function BankAccount(balance) {
    // Initialize balance and transactions properties
}

// Define deposit method on BankAccount's prototype

// Define withdraw method on BankAccount's prototype

// Define getTransactionHistory method on BankAccount's prototype

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
    // Initialize balance and transactions properties
    this.balance = balance
    this.transactions = []
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`)
}

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if(amount < this.balance) {
    this.balance -= amount;
    this.transactions.push(`Withdrew ${amount}`)
  } else {    
    this.transactions.push(`Insufficient balance`)
    return "Cannot withdraw if balance is insufficient"
  } 

}
// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions.toString()
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { balance, transactions } = JSON.parse(input);
  const account = new BankAccount(balance);

  transactions.forEach(({ type, amount }) => {
    if (type === "deposit") account.deposit(amount);
    if (type === "withdraw") account.withdraw(amount);
  });

  process.stdout.write(JSON.stringify(account.getTransactionHistory()));
});


function Employee(name, position, salary) {
    // Initialize name, position, and salary properties
    this.name = name;
    this.position = position;
    this.salary = salary;
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function (percent) {
  this.salary += this.salary * (percent / 100);
  
}

function Library() {
    // Initialize books property
    this.book = [];
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function (book) {
  this.book.push(book);
}

// Define findBook method on Library's prototype
Library.prototype.findBook = function (title) {
  if(this.book.includes(title)) {
    return "Book found";
  } else {
    "Book not found";
  }
}