// number & maths
// const score = 100; // here you the datatype is automatically detected
// console.log(score);

// const balance = new Number(400.2345); // here you will explicitly get number data type
// console.log(balance.valueOf());
// console.log(balance.toFixed(2)); // this will show only two numbers after decimal point eg. 400.23

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

// ************************************* Maths ************************************ //

// console.log(Math.abs(-4)); // changes negative value to positive value
// console.log(Math.round(balance)); 
// console.log(Math.ceil(4.6)); // takes the highest value like if ceil(4.1) the ans will be 5 
// console.log(Math.floor(4.6)); // takes the lowest value like if ceil(4.1) the ans will be 4

// const arr = [2, 10 , 20, 8 , 30, 99, 212, 1];
// const random_num = Math.round(Math.random()*arr.length)
// console.log(arr[random_num]); // gives you a random number between 0 and 1;

const min = 10;
const max = 20;

for(let i = 0; i < 1000; i++){
    console.log(Math.round(Math.random() * (max - min + 1)) + min);
}
