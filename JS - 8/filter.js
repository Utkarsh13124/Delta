let nums = [7, 2 , 4 , 1 , 2 , 3 ,7 , 8];

// element add if callback is returning true. 
let odd = nums.filter( (num) => (num & 1) );
console.log(odd);