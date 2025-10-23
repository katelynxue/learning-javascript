console.log("I am printing");
const randomNum = Math.floor(Math.random() * 100);
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

const temp = Math.floor(Math.random() * 100);
const preference = 
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

const randomSum = () => {
    let count = Math.floor(Math.random() * 6) + 3;
    let nums = Array.from({length: count}, () => Math.floor(Math.random() * 100)); //https://chatgpt.com/share/68f0fb11-b54c-8009-a6d1-25fd5aa5f3b6
    return sum(...nums);
}
console.log(randomSum());

const fruitArray = ["strawberry", "banana", "orange", "apple", "mango", "kiwi", "pear", "peach", "grape", "watermelon", "cherry", "pineapple", "lemon", "lime", "papaya"];
console.log("Array size: " + fruitArray.length);
console.log("first element: " + fruitArray[0]);
console.log("last element: " + fruitArray[fruitArray.length - 1]);
console.log("random element: " + fruitArray[Math.floor(Math.random() * fruitArray.length)]);
fruitArray.push("dragonfruit");
console.log("new array: " + fruitArray);
let int = 1;
fruitArray.push(int);
console.log("new array with int: " + fruitArray);

const numArray = [];
for (let x = 0; x < 10; x++){
    let randomNum=Math.floor(Math.random() * 59)+29;
    numArray.push(randomNum);
}
console.log("Number array: " + numArray);

let maxDistance = 0;
for (let i = 0; i < numArray.length - 1; i++){
    let distance = Math.abs(numArray[i] - numArray[i + 1]);
    if (distance > maxDistance){
        maxDistance = distance;
    }
}
console.log("Maximum distance between consecutive elements: " + maxDistance);

const squaredArray = numArray.map(x => x * x);
console.log("Squared array: " + squaredArray);

const maxValue = (Math.max(...squaredArray));
console.log("Maximum value in squared array: " + maxValue);

const filteredArray = squaredArray.filter(largerThanHalf);

function largerThanHalf(num){
    return num >= (maxValue / 2);
}
console.log("Filtered array: " + filteredArray);


function sum(total, num) {
  return total + num;
}
console.log("Sum of filtered array: " + filteredArray.reduce(sum,0));

fruitArray.forEach((item, index) => {
  console.log(index + ": " + item);
});

class person {
    constructor(name, age, birthday) {
        this.name = name;
        this.age = age;
        this.birthday = birthday; 
    }
    print(){
        console.log(this.name,this.age,this.birthday);
    }
}

const person1 = new person("Katelyn", 18, "August 31st 2007")
const person2 = new person("Kim Kardashian", 45, "October 21st 1980")
const person3 = new person("Doja Cat", 30, "October 21 1995")
const person4 = new person("Suni Lee", 22, "March 9 2003")
const person5 = new person("Barbara Sprouse", 32, "October 8 1993")
const person6 = new person("Max Verstappen", 28, "September 30 1997")
const person7 = new person("Lando Norris", 25, "November 13 1999")
const person8 = new person("Oscar Piastri", 24, "April 6 2001")
const person9 = new person("Charles Leclerc", 28, "October 16 1997")
const person10 = new person("Lewis Hamilton", 40, "January 7 1985")
person1.print();

const people = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10 ];
// const stringArray = JSON.parse(people);
// let birthday = stringArray[3];
// console.log(birthday);

const peopleAges = people.filter((person)=>{

 console.log(person.birthday);
 return person >= "1986";
});

function checkAge(people){
   
    
}
console.log(peopleAges);

