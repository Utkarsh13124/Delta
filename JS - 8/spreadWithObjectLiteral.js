/*
    Ques// 
        kaise use krte hi kya hota hi?
        What if we try to spread a array?
            they coonvert into key value pair.
        how to convert a array in key - value pair in object ? and isse kya hota hi , ky create kr sakte hi?

    Theory // 
        copy krne ke liye. 
        for making object like hash style we have to use curly braces.
    Summary//


*/

let data = {
    email : "utkarson@ybl",
    password : "123456789"

}

const dataCopy = { ...data , id : 123 , country : "US" }; 

// copying with help of 
let arr5 = [1 , 2 , 3];

let arrCopy = {...arr5 };
console.log(arrCopy);