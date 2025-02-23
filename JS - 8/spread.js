/*
    Spread Operator
        Expands an iterable into multiple values
        
        iterable ki value ko failana ho. tab spread operator ko use krna ho.
    
        let arr = [1 , 2 , 3, 4 , 5];

*/

let arr = [1 , 2 , 3, 4 , 5];

console.log(..."apnacolledge");

console.log(Math.min(...arr));

// agar jyada value hoti hi , to yee krne me humhe dikkat hoti . 
console.log(Math.min(arr[0] , arr[1] , arr[2] , arr[3] , arr[4])); 



//! Array  Literals

let arr2 = [1 , 2 , 3, 4, 5];
let arr3 = [6 , 2 , 3, 4, 5];

// ... spread operator is used here.

let mergedArr = [...arr2 , ...arr3];
//! order matters
console.log(mergedArr);



// ! creating copy
let newArr = [...arr];
let newArr2 = [...arr , ...arr2];

