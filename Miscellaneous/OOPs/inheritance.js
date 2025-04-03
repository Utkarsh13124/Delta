/*
    class Student{
        constructor(name , age , marks){
            this.name = name;
            this.age = age;
            this.marks = marks;
        }

        talk(){
            console.log(`My name is ${this.name}`);
        }
    }

    let stu1 = new Student("adam" , 25 , 95);

    class Student{
        constructor(name , age , subject){
            this.name = name;
            this.age = age;
            this.subject = subject;
        }

        talk(){
            console.log(`My name is ${this.name}`);
        }
    }

    
    ! // 
    Since many thing are common , so we can create a new class of common thing.
    Child class parent class ki saari properties and function ko inherit kregi.

    extends keywords is used to inherit 

    Inheritance is a mechanism used to create class from existing class. 

    super keywords is used to call parent constructor


    override :- 
        child class ke ander agar same naam ka function use hota hi , to child wala parent ko override kr deta hi. 
*/



class Person{
    constructor(name , age ){
        console.log(`Person Class constructor is called.`);
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`My name is ${this.name}`);
    }
}
class Student extends Person{
    constructor(name , age , marks){
        console.log(`Student Class constructor is called.`);
        super(name , age);
        this.marks = marks;
    }
}



class Teacher{
    constructor(name , age , subject){
        console.log(`Teacher Class constructor is called.`);
        super(name , age);
        this.subject = subject;
    }

    
}
