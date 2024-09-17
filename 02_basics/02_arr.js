// const marvel_heros = ["Thor", "Ironman", "captainAmerica🛡️"];
// const dc_heros = ["superman", "Batman", "wonderWomen🍵"];

// // marvel_heros.push(dc_heros);
// // console.log(marvel_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]; // spread method to combine two or more arrays
// console.log(all_new_heros);

// const another_array = [1 , 2, 3, [4,5], 4, 5, [6,[7,8],7,8], 6, [7, [8], 8], 7, 8];

// const new_flat_array = another_array.flat(2)
// console.log(new_flat_array);

console.log(Array.isArray("Hitesh")) // checks if array
console.log(Array.from("Hitesh")) // create an array 
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));