//Number methods
const myVariable = "423.76542aaaaa";
const myNumber = 42;
const myFloat = 42.0;

console.log(Number.isInteger(42));
console.log(Number.isInteger(42.02));
console.log(Number.isInteger("raghul")); 
console.log(Number.isInteger(42.0)); 
console.log(Number.parseInt(myVariable))
console.log(parseInt(124.00));
console.log(Number.parseFloat(myVariable).toFixed(2));

console.log(Number.isNaN(42));
console.log(Number.isNaN("Raghul"));
console.log(isNaN("Raghul"));

console.log(Math.PI)
console.log(Math.trunc(Math.PI));
console.log(Math.round(5.8));
console.log(Math.ceil(5.2));
console.log(Math.floor(7.8));

console.log(Math.pow(3,4));
console.log(Math.max(10,4,6,2,1));
console.log(Math.min(10,4,6,2,1));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);
