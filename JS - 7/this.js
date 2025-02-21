const student = {
    name: "John Doe",
    age: 20,
    grade: 95,

    getGrade(){
        console.log(this); // this object means student. it print all details of student.
        console.log("getGrade method called" , this.grade); // without this we get error.
    }
}


function getThis(){
    console.log(this); // defaulty this object returns Window object.
}