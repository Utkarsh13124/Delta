let arr = [1,2 ,3,4];
let arr2 = [2,4];

let a = arr.every( (el) => (el%2 == 0) );
let b = arr2.every( (el) => (el%2 == 0) );

console.log(a , " ", b);


//! similarly some function returns true if atleast one is true. 

    let c = arr.some( (el) => (el%2 == 0) );
    let d = arr2.some( (el) => (el%2 == 0) );

    console.log(c , " ", d);