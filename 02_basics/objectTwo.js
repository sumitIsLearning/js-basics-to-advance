// singleton
// Object.create is a constructor


// object literals

// how declare a symbol and use it in object literals
const mysym = Symbol('key1');

const user = {
    name: "sumit",
    "lastname": "chakraborty",
    age: 21,
    location: "Assam",
    [mysym]: "Mykey1",
    Email: "sumit@outreachright.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user.name);
// console.log(user[mysym]); // this is way to access symbol from an object 
// // how to access the key from an object if it is declared in quotes
// console.log(user["lastname"]);

// how to freeze an object, basically means that you cannot change the values of keys
// Object.freeze(user);
// user.name = "joy";
// console.log(user.name);

user.greeting = function() {
    console.log("Hello JS user");
}

// how to refer the same object , (use "this")
user.greetingTwo = function() {
    console.log(`Your Email is: ${this.Email}`);
}

user.greeting();
user.greetingTwo();
