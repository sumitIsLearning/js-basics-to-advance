// TODO:singleton object
/* you can create singleton object by using: */
// Object.create

// but in this lecture we will not talk about singletons, we will be talking about 
// object literals
/* how to declare object literals: */

/* TODO: how to delare a symbol and use it in a object */
const uniqueId = Symbol('id');

const userOne = {
    firstName: "sumit",
    "lastName": "Chakraborty",
    email: "sumit@outreachright.com",
    [uniqueId] : 224564896, // hidden key
    location: "Assam",
    isLoggedIn: false,
    lastLogged: ["sunday", "Monday"]
}

// console.log(userOne[uniqueId]);
// console.log(userOne);

/* TODO: how to access key if it is declared in quotes */
// console.log(userOne["lastName"]);

/* There are two ways to access the keys value 
1. using dot(.)
2. using square brackets([]) 
*/
// console.log(userOne.firstName);
// console.log(userOne["firstName"]);

/* TODO: you can also declare a function inside a object */
userOne.greeting = () => {
    return "Hello User"
    // console.log("Hello User");
    // return 0;
}
/*TODO: one thing you should notice , that if you try to log the function it give return you undefined and print two thing "Hello User" and "undefined" */

// console.log(userOne.greeting); // this will print the function not the content inside the funciton, try this

// /*TODO: now see the thing i was talking before:*/ console.log(userOne.greeting());

/* too avoid this you can do three thing (that i know as of now) */

// userOne.greeting()  // just call the function or

// you can return something 
// console.log(userOne.greeting());

/* TODO: how to refer the same object, using "this", */
// userOne.greetingTwo = function(){
//     console.log(`your Email: ${this.email}`); // `` is called string interpolation
// }
// In class we use "this" to refer to the object created form that constructor
// userOne.greetingTwo();


// shallow freezing
/* TODO: how to freeze the object , so that values cannot be modified */
// Object.freeze(userOne);

// userOne.email = "aljflkal@gmail.com";
// console.log(userOne.email);

//Deep Freezing
// function deepFreeze(obj){
//     Object.freeze(obj);
//     Object.keys(obj).forEach( key => {
//         if(typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
//             deepFreeze(obj[key]);
//         }
//     });
// }

// deepFreeze(userOne);
