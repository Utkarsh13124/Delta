// function personMaker(name , age){
//     const person = {
//         name : name , 
//         age : age , 
//         talk(){
//             console.log(`My name is ${name}`);
//         }
//     };

//     return person;
// }

// let p1 = personMaker("adam" , 35);
// p1.talk();

//! disadvantage of factory function : - every object is creating his own copy. 
// p1.talk() === p2.talk() retruns false we are comparing their references.
// ! so solution is new operator / or we say Constructors. 


// ------------------------------Second Way ----------------
//! Constructors -- doesnt return anything & start with Capital. its a convention
// any function created here will have only one copies.
// function Person(name , age){
//     this.name = name;
//     this.age = age;
// }
//! defining a person for all person instances
// Person.prototype.talk = function (){
//     console.log(`Mi , my name is ${this.name}`);
// }

// way to create object from constructor using new
// let p1 = new Person("adam" , 25);
// let p2 = new Person("eve" , 25);

/* new :-
    it allow , to create new instances from constructor.
    1. creat blank object
    2. point its prototype to constructor prototype.
    3. constructor refer to object.
*/

// ------------ Better way --> Classes ------------------

/*
    Class is a basicly a template for creating object.
        adv :- function hum ander hi define kr pate hi.
*/

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Mi name is ${this.name}`);
    }
}

let p1 = new Person("adam" , 22);
let p2 = new Person("eve" , 21);

