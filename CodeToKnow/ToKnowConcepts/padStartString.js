const mobileNumber = "9923456788";
const lastThreeDigit = mobileNumber.slice(-3);
console.log(lastThreeDigit);

const maskedMobileNumber = lastThreeDigit.padStart(mobileNumber.length, "*");
console.log(maskedMobileNumber);
