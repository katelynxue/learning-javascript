console.log("I am printing");
let randomNum = Math.floor(Math.random() * 100);
console.log("The random number is: " + randomNum);
if (randomNum % 7 == 0){
    console.log("The number is divisible by 7");
} else {
    console.log("The number is not divisible by 7");
}
if (randomNum % 9 == 0){
    console.log("The number is divisible by 9");
} else {
    console.log("The number is not divisible by 9");
}
if (randomNum % 7 == 0 && randomNum % 9 == 0){
    console.log("The number is divisible by both 7 and 9");
} else {
    console.log("The number is not divisible by both 7 and 9");
}

let temp = Math.floor(Math.random() * 100);
let preference = 
    (temp >= 90) ? "too hot" :
    (temp >= 60) ? "perfect" :
    "too cold";

console.log("The temperature is " + temp + ", which is " + preference);

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

