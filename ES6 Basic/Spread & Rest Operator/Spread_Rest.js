// Spread and Rest

// Spread start with (...)

arr1 = [1,2,5,5]
arr2 = [4,73,1,7]

// let arr3 = arr1.concat(arr2)
// console.log(arr3);

let arr3 = [...arr1, ...arr2]
console.log(arr3);


function sum(a,s,hg,h,ty,y,sy) {
    return a+s+hg+h+ty+y+sy
}

let arr4 = [1,2,5,7,7,3,2]

console.log(sum(...arr4))



// Rest???

// rest also start with (...)
// why we used rest op??? => used to store extra values
// where it's used?? => used in function parameter

function dosomething(n1, ...n2) {
    console.log(n1, n2);
}
dosomething("Ali", "Ahmad", "Usman", "Saad")





