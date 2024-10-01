const user = {
    username: "Sumit",
    price: 99,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // Note: 'this' refers to the context inside the currly braceses or the you can say the object itself
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "joy"
// user.welcomeMessage()

// console.log(this) // Note : here you will get and empty object , but if you run the same code in browser console , you will get 'window' , reason is that 'window' is a global object in the browser.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const arrowFunc = () => {
    let username = "sumit";
    console.log(this.username);
} // outside an object both keyword function and arrowfunction cannot use this keyword
// but inside object only keyword function can use this keyword

// arrowFunc();

// Implecit return eg: where you don't use {} braceses and return statement
// you use () 
// const addTwoNum = (num1, num2) => (num1 + num2);
const user2 = () => ({
    username: "Rocky", 
    addTwoNum : (num1, num2) => (num1 + num2)
});
// console.log(addTwoNum(2,3)); 
console.log(user2().addTwoNum(2,3)); 