// What is callback function??
// It's just a function that take another function as an argument

// Here is the example:


function dosomething(callback) {
    callback();
}

function greet() {
    console.log("Hello");
}

dosomething(greet)



// Let disscuss some interesting example:


function orderPizza(pizzaType, callback) {
    console.log("Ordering a", pizzaType, "pizza...");
  
    setTimeout(() => {
      console.log("Pizza is ready!");
      callback(pizzaType);
    }, 2000);
  }
  
  function deliverPizza(pizzaType) {
    console.log("Delivering your", pizzaType, "pizza!");
  }
  
  orderPizza("Pepperoni", deliverPizza);


// Now it's time to solve practice:
// "Exercise 13.1"

/*
1. Create a function named greet() that takes one argument, fullName .
That argument should be an array. Output the items of the array into
the console interpolated into a greeting message string.
2. Create a second function that has two arguments: the first one is a
string for the user's full name, and the second is the callback
function.
3. Split the string into an array using the split() method.
4. Send the full-name array to the greet() function created in the first
step.
5. Invoke the process of the callback function.
*/

function greet (fullName) {
    console.log(`Hello ${fullName}!`);
    
}

function secFun(fullName, callback) {
    let name = fullName.split()
    callback(name)
}

secFun("Abdul Munnam", greet)

  
