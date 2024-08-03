// What is default parameter function????

// Default parameter function means when no parameters pass to the function at the time of calling it, even with no parameters it display value because of default values that we assign it at the time of declaration

// Understand?? if no then here is example I hope you will digest it

function showName(name = "Ali") {
    console.log(name);
    
}

showName("Abdul Munnam")   // Output: Abdul Munnam
showName()    // Output: Ali

// Now take another example

function sum(a = 8, b = 8) {
   let sum  = a + b
   console.log(sum);
   
}

sum(6)  // Output: 14 


// What if I set one default parameter and other simple parameter??

function sum(a , b = 5) {
    let sum = a + b
    console.log(sum); 
    
}

sum(5)  // Output: 10

// But what if I write simple parameter after default parameter?? 
// Let's see

function sum(a = 5 , b) {
    let sum = a + b
    console.log(sum); 
    
}

sum(5)  // Output: NaN 

// It will show NaN because it's a rule to define simple parameter first