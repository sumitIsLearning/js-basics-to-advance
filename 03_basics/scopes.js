// Global Scope
let a = 20;

if(true) {
    let a = 2;
    // console.log("Blocked scope: ", a);
}

// console.log("Global scope: ", a);


function one() {
    const username = "Sumit";
    const two = () => {
        const website = "Youtube.com";
        console.log(username);
    }
    // console.log(website); // It will give us reference error: website is not defined;

    two();
}

// one();

if(true) {
    const username = "Sumit";
    if(true) {
        const website = "Youtube";
        console.log(`${username}'s ${website}`);
    }
    // console.log(website); // first reference error
}

// console.log(username); // second reference error


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// sometime this is known as expressions
const addOne = (num) => {
    return num + 1;
} // Note: if you try to access this type of functions before declaration , it will througn referenceerror: cannot access 'function name' before initialization

// console.log(addOne(4));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
x = 5;
console.log(x);

// hoisting is default behaviour of javascript, meaning every declaration is moved to the top of the current scope 
/*  like: if you declare variables with let and const in a function . the variables are moved to the top of the scope , meaning the function knows about let and const variable , but if you try to access it , it will throught and error */
// example:
/* 1: if i declare a let x variable now you will see a reference error : that you cannot access before initializing */;

// let x;

/* 2: if i declare a const x variable now you will see a syntax error : that you cannot access before initializing*/

// const x; // Note: const declaration must be initialized