const tinderUser = new Object(); // singleton way of declaring object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        user1: {
            firstname: "sumit",
            lastname: "chakraborty"
        },
        user2: {
            firstname: "joy",
            lastname: "Das"
        },
        user3: {
            firstname: "swarnav",
            lastname: "chatterjee"
        },
    }
}

// console.log(regularUser.fullname.user1.firstname);


const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// const obj3 = Object.assign({}, obj1, obj2); // first parameter is target where everyelement will be copied // other parameters are source from where the copy will happen

// the most usable one is
const obj3 = {...obj1, ...obj2};

// console.log(obj3);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // returns you the array of keys

// console.log(Object.values(tinderUser)); // returns you the array of values of the keys

// console.log(Object.entries(tinderUser)); // converts each element of array of objects to array of arrays


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructuring
const course = {
    coursename: "js in hindi",
    price: 99900,
    courseInstructor: "sumit"
}

const {courseInstructor: Instructor} = course;
console.log(Instructor);

// JavaScript is a garbage-collected language. JavaScript removes the pain of memory management by automatically allocating its memory and freeing it up (garbage collection) when not in use.