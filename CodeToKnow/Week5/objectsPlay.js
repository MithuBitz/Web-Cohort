const favCricketer = {
  firstName: "Sachin",
  lastName: "Tendulkar",
  specialization: "Cricket",
  play4four: function () {
    return console.log("Wao its a four");
  },
  totalOdiRuns: 18426,
  totalRuns: { ODI: 18436, TEST: 15921 },
};

//   const cricketer = favCricketer; // Hard copy
// const cricketer = {...favCricketer} // Shallow copy
// const cricketer = {...favCricketer, totalRuns : {}} // Deep copy but it will not good if there are many more inner object
const cricketerData = JSON.stringify(favCricketer); // Serialize the object to json string
const cricketer = JSON.parse(cricketerData); // Deserialize to object And this the parfect way of deep copy.
// console.log(JSON.stringify(favCricketer));

cricketer.firstName = "Rahul";
cricketer.lastName = "Dravid";
cricketer.totalOdiRuns = 10889;
cricketer.totalRuns.TEST = 13288; // In Shallow copy it will change the Sachin run also.
console.log(cricketer);
console.log(favCricketer);
