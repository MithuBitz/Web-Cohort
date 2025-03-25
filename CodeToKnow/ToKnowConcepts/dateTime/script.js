const now = new Date();

console.log(now);
console.log(now.toString());
// console.log(new Date(8.64e15 + 1)); // Invalid date because not in range

// getTime() & setTime()
const cohortStartDate = new Date();
console.log(cohortStartDate.getTime());

console.log(cohortStartDate.setTime(1000000000000));

console.log(cohortStartDate);

// let start, end;

// start = new Date();
// for(let i = 0; i < 1000; i++ ){
//     Math.sqrt(i)
// }
// end = new Date()

// console.log(`Operation took ${end.getTime() - start.getTime()} msec`);

const now1 = new Date();
console.log(now1.getUTCFullYear());
console.log(now1.getTimezoneOffset());
