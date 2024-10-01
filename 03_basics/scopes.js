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

console.log(addOne(4));