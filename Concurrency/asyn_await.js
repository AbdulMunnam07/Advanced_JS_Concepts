//  What do you mean by asyn/await??
/*
We have just seen the Promise syntax. With the async keyword, we can
make a function return a Promise. This makes the Promises nicer to read
and look a lot like synchronous (non-concurrent) code. We can use this
Promise just like we learned in the previous section, or we can use the more
powerful await keyword to wait until the Promise is done. await only
works in an asynchronous function.
*/

function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Hi!", name))
        }, 5000);
    })
    
}

async function promFun(name) {
    let myName = await greet(name)
    console.log(myName);
}


promFun("ABDULMUNNAM")


// It's time to solve exercise 

// Exercise 13.3 
/*
1. Create a global value for a counter.
2. Create a function that takes one argument. Return the result of a new
Promise, setting a setTimeout() function that will contain the resolve
instance.
3. Increment the counter within setTimeout() , adding one every second.
Resolve the Promise with the value of the counter and the value of the
variable that was in the function argument.
4. Create an asynchronous function that outputs into the console the
value of the global counter and the value of the argument of the
function.
5. Create a variable to capture the returned resolve value from the await
function. Output that result into the console.
6. Create a loop to iterate 10 times, incrementing the value and invoking
the async function, passing the value of the increment variable as the
parameter in the function.
*/ 

let counter = 0
function func1(args1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            resolve([counter, args1])
        }, 1000)
    })
}

let func2 = async (value) => {
    console.log("counter: ", counter)
    console.log("value: ", value)

    let returnedValue = await func1(value)
    console.log("returnedValue: ", returnedValue)
}

for (let index = 1; index <= 10; index++) {
    func2(index)
}
