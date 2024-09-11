// stack (primitive datatypes) && Heap (notprimitive datatype/ reference type)

// the variable that are associated with primitive datatype
// gets a deep copy of the original variable eg.
let score = 33;
let myscore = score; // here the myscore get a deep copy of the score's value
// so even if we change the value of myscore , the score variable value will not be effected
myscore = 50;
console.log(score); // 33
console.log(myscore);// 50

// **************************** HEAP ************************** //
//  but in case of non primitive datatype/ reference type , we get the address of the variable or reference of the variable eg.
let sumit = {
    email: "sumit@gmail.com",
    number: "+91 140_843_265_4",
    age: 21
}

let sumitch = sumit;
sumitch.number = "+91 600_045_628_2"
// here the value of number in both the variable wil be changed
console.log(sumit);
console.log(sumitch);
// { email: 'sumit@gmail.com', number: '+91 600_045_628_2', age: 21 } they will get same value;

