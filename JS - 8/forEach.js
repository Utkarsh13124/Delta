const arr = [1 , 2, 3, 4, 5, 6, 7, 8];

// const print = (val) => {
//     console.log(val);
// }

// arr.forEach(print);


//! Another way of implementing

arr.forEach( function(val) {
    console.log(val);
} );

// Arrow function

arr.forEach( (val) => console.log(val) );