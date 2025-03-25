/*
    Last in first out.
    callstack is a data structure that tracks which call is being made , runing.
*/

/* BreakPoint
    generally used for debugging.
    goto -. inspect - source  - page file


    How to use?
     jab bhi program run krega , breakpoint pr jake ruk jayega.
*/

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans =   two() + one();
    console.log(ans);
    return ans;
}

three();