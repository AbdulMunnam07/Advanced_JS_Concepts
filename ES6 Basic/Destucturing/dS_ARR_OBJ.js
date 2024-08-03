// What is destructuring ???

// Destructuring is a method to unpack the values of the arrays or objects

// Do not understand?? NO worry let me explain the scenario of destructuring w.r.t Array or objects

let arr = [1,2,5,7,9]

const [first, second, third, ...rest] = arr

console.log(first);      // Output: 1
console.log(second);    // Output: 2
console.log(third);     // Output: 5
console.log(rest);      // Output: [7,9]

// This is the way to store the values of the array into variables called destructuring



// Now let's take example in sense of objects

let person = {
    name : "Abdul Munnam",
    age: 20,
    location: "Faisalabad",
    religion: "Islam"
}

// const {p_name, p_age, p_location, p_religion} = person

// console.log(p_name);  // Output: undefined

// Output will show undefined because in destructuring we have to used same lower case letter name as we used in obj then you"ll succeed to extract value from obj
// So let's share correct method

const {name, age, location, religion} = person

console.log(religion);  // Output: Islam 




// This was all about destructuring ........................


