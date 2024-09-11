const name = "sumit";
const age = 21;
console.log("Hello my name is " + name + " and iam " + age + " old"); // This is called string concatenation

console.log(`Hello my name is ${name} and iam ${age} old`);// This is called string interpolation(only for js)

const gameName = new String(' sumitch ');
console.log(gameName.valueOf());
console.log(typeof gameName.toString());
console.log(gameName.substring(0,5));
console.log(gameName.slice(-7,4));
console.log(gameName.trim());
console.log(gameName.search("u"));
console.log(gameName.split("_"));
console.log(gameName.blink());// deprecated no longer in use
console.log(gameName.small());// deprecated no longer in use
// console.log(gameName.valueOf().isWellFormed()); // avaiable for primitive strings not for string objects
console.log(gameName.codePointAt(1)); // returns unicode point of character
console.log(gameName.concat(',', name)); // returns unicode point of character


