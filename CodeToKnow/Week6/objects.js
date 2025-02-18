class Criketer {
  constructor(fName, lName, runs) {
    this.fName = fName;
    this.lName = lName;
    this.runs = runs;

    console.log(this.getPlayerStats());
  }

  getPlayerStats() {
    return `${this.fName} ${this.lName} total runs : ${this.runs}`;
  }
}

const sachin = new Criketer("Sachin", "Tendulkar", 20000);
console.log(sachin);
// console.log(sachin.getPlayerStats());
