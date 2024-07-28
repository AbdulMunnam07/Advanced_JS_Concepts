// First we should know how simple function works
function greet() {
    console.log("Hello world");
}
greet()



// Then understand what is "Anonymous" function
greet = function () {
    console.log("hello world");
}
greet()


// What is arrow function??
// Arrow function is a function that is used to write our program in shorter way

// Non-parameterized function
greet = () => {
    console.log("Hello everyone");
}
greet()

// parameterized function
sum = (a,b) => {
    return a + b;
}
console.log(sum(2,3));


// Single parameter function 
num = a => a;  // When we have only one parameter we can skip "()" beackets

console.log(num(5));