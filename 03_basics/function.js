function sayMyName() {
    console.log("s");
    console.log("u");
    console.log("m");
    console.log("i");
    console.log("t");    
}

// const addTwoNumbers = (num1, num2) => {
//     console.log(parseInt(num1)  + parseInt(num2));
// }

// const addTwoNumbers = (num1, num2) => {
//     if(!num1 || !num2) throw new Error("Enter Two Numbers");
//     return (Number(num1)  + Number(num2));
// }

const addTwoNumbers = (num1 = 0, num2 = 0) => {
    return (Number(num1)  + Number(num2));
}
 
const result = addTwoNumbers(2,"3");
 
// if(result) {
//     console.log(`Result is: ${result}`);
// } else{
//     console.log("Result not found");
// }

// how shopping carts are calculated
// how can you pass multiple argument in a single parameter
// function calculateCartPrice(...num) { // ... is known as REST operator / SPREAD operator
//     let result = 0;
//     num.forEach((number) => {
//         result += number;
//     })
//     return result;
// }

// you can also do this
// this mean that the first two arguments will go inside val1 and val2 and rest will go inside num array
function calculateCartPrice(val1, val2, ...num) { // ... is known as REST operator / SPREAD operator
    let result = 0;
    num.forEach((number) => {
        result += number;
    })
    return result + val1 + val2;
}

// console.log(calculateCartPrice(200, 300, 2000, 500, 10000, 100000));


// how can you pass and handle Objects is functions
function handleObjects(obj) {
    if(!(typeof(obj) === "object")) return console.log("Pass a object as argument");
    (obj.title) ? console.log(`bro the new ${obj.title} is so cool`): console.log("title not found");
}

handleObjects( {
    title: "Iphone 16",
    description: "New age Modern Looking Premium phone for Premium Users",
    price: 233000,
});