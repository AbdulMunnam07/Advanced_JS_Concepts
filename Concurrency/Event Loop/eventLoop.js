/* Do you know what is single-threaded and multi-threaded???????

if not then let me explain:

-> Single-threaded => Do single thing at a time
-> Multi-threaded => Do multiple things at the same time

So can you tell me JS is single or multi threaded??

let me explain, JS is single threaded

The answere was shocking? also for me when I hear this first time

JS is called single-threaded language because of Event loop so what is event loop???

In event loop we discuss two concepts and you have to understand these concepts
- Call Stack
- Callback Queue

______CallStack and Callback Queue________

JS execute code line by line but when it find a function that will take some time to execute (like setTimeOut() function) it send this line of code to the callback queue and it remain continue it's execution in Call Stack when it complete it's work then it start to view on callback queue is there any value there if it find event loop load this code into the call Stack then call Stack execute it and this value display at the end of the last statements that was executed by call Stack


*/


// function func1(name) {
//     console.log("Function start.............");
    
//     setTimeout(() => {
//         console.log("Sorry I'm late");
        
//     }, 2000);
//     console.log(`My name is ${name}`);
//     console.log("Function End...............");
// }

// func1("Abdul Munnam")



// Now it's time to build a project

// Password Checker

/*
1. Create an array of allowed passwords.
2. Create a login function that will check if the argument is a value that is
included in the passwords array. You can use indexof() or the
includes() method to check the array for a value and return a
Boolean value of the result.

The includes() method is an array method that can check
whether a certain value is included among the items in the array. It
will return a Boolean value depending on the result.

3. Add a function that returns a Promise. Using resolve and reject ,
return a JavaScript object with the Boolean of true or false to
indicate the password validity status.
4. Create a function that checks the password, sending it to the login
function, and using then() and catch() , outputs the result of either
the rejected password or the resolved password.
5. Send several passwords, some within the array, others not, to the
checker function
*/


let allowedPassword = ["User123", "User1020", "Admin00", "Admin098"]

let login = (password) => {
    return allowedPassword.includes(password)
}

let prom = (password) => {
    return new Promise((resolve, reject) => {
      if (login(password))
        resolve({status: true})
      else
        reject({status: false})
    })    
}

let checkPassword = (password) => {
    prom(password)
    .then(value => {
        console.log(`Password ${password} is valid:`, value.status);
    })
    .catch(value => {
        console.log(`Password ${password} is invalid:`, value.status);
        
    })
}


checkPassword("user123")    // Output: Password user123 is invalid: false
checkPassword("User123")    // Output: Password User123 is valid: true




