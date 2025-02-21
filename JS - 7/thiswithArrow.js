// For Normal function 
//     scope 
//         this--> calling Object

// For Arrow Function  
//     Lexical scope
//         dendes on parents ko kisne call kiya hi
        

const student = {
    name: "John Doe",
    age: 20,
    grade: 95,
    prop : this , // global scope

    getName(){
        console.log(this); // this object means student. it print all details of student.
        return this.name;
    },

    getGrade : () => {
        console.log(this);  // this prints the global Window object. 
            // this means for arrow function means uske parent ko reference ja rha hi. ,eans uske parents ko object bnate hi this ka use kr rhe hi. 
        return this.grade;
    }
    
}
// suppose we used arrow function in nested function , so this will have lexical scope.
// else normal this have object scope.

// setTimeout is a method in window object.