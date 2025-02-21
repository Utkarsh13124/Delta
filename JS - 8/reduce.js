// first variable is accumulator , second is element.
// in next stage sccumulator store value of result.


    // reduce(callbackFn)
    // reduce(callbackFn, initialValue)
        // initialvalue is optional 
        // if provided , it serves as accululator , and result serves as the first value.


//! reduce function call n - 1 time, first time its call for first two value.
// ! in first round first value servss as accumulator and second value serves as result.
let nums = [1 , 2, 3 , 4];

let finalVal = nums.reduce( (res , el) => res + el  );
console.log(finalVal);