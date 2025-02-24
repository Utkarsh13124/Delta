/**
 * 
 *  
 */

const student = {
    name : "karan",
    age : 14, 
    classi : 9.5,
    subjects : [ "hindi " , "america"], 
    username : "karan@12", 
    password : "abcd"
}

// ! we could use defuault value , as well as new variable, whilede structing.

// let username = student.username;
// let password = student.password;
//! also setting a default vaule, if city property is not exist
    
let {username : user, password : secret , city : place = "Mummbai"} = student;
// ! curly braces shoulr be used 
// in student object we search for username key  if find then add otherwise non defined put.

// ! if we want to store in a different variable
let { age : agea , classi } = student;
    // ! search for age kyword but store ans in agea variable.
