/*
    Destructuring : - 
        storing values in a new variale
*/

let names = ["tony" , "bruce" , "sheep" , "peter" , "sheep2"];
let winner = names[0];
let runnerup = names[1];
let second = names[2];

// ! small way to represent
let [winner1, runnerup1 , winner2 , ...others] = names;
// starting wale element are in variable , and rest are in an array with help of rest operator. 