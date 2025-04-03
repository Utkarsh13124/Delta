class Mammal{ // base class , parent class 
    constructor(name){
        this.type = "warm Blooded";
        this.name = name;
    }

    eat(){
        console.log("I am eating.");
    }
}

class Dog extends Mammal{
    // child
    constructor(name){
        super(name);
    }

    eat(){ // override
console.log("Dog is eating.");
    }

    bark(){
        console.log("Woff..");
    }
}

class Cat extends Mammal{
    // child
    constructor(name){
        super(name);
    }

    Meow(){
        console.log("Meow..");
    }
}