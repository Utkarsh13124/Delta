// they are not standalone function , we use them with variable, or assign to callback function

// nameless function , & not have function keyword.


// ! in case of single argument we may not use () brackets. 
// const sum = () => console.log(2 + 3);
const sum = (a, b) => {
    console.log(a + b);
}






// ! IMPLICIT ARROW FUNCTION
    // implicit mtlab kuch batane ki jarrorat mhi hi, wo apne aap hi ye kaam kr lega. 
    // but hum {} ki jagah () statement use krna rhega

// agar sirf ek line aur use hum as return staement use krna chahte hi, so we can make the arrow function even smaller by removing return keyword

const ml = (a, b) => a + b;   // {} nhi () hota hi last me.