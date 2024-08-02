// What is promise??

/*
A Promise is a special object that connects code
that needs to produce a result and the code that needs to use this result in
the next step.
*/

let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example
    let x = 20;
    if (x > 10) {
    resolve(x); // on success
    } else {
    reject("Too low"); // on error
    }
   });
   promise.then(
    function (value) {
    console.log("Success:", value);
    },
    function (error) {
    console.log("Error:", error);
    }
   );

   

// Let Solve exercise

// Exercise 13.2

/*
Set up a Promise that resolves with a value of Start Counting .
2. Create a function named counter() that has one argument that gets
the value and outputs it into the console.
3. Set up the next function in the Promise with four then() instances,
which should output a value into the counter function, and return a
value which will provide input for the subsequent then() instance.
The returned values should be one , then two , then three .
*/

let prom = new Promise((resolve, reject) => {
  resolve("Start Counting.....")
})

function counter(value) {
    console.log(value);
}

prom
.then(value => {
    counter(value)
    return "One"
})
.then(value => {
    counter(value)
    return "Two"
})
.then(value => {
    counter(value)
    return "Three"
})
.then(value => {
    counter(value)
})
.catch(err => {
    console.log("Lo bhai error lo", err);
    
})

