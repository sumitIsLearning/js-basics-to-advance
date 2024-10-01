// Global Scope
let a = 20;

if(true) {
    let a = 2;
    console.log("Blocked scope: ", a);
}

console.log("Global scope: ", a);