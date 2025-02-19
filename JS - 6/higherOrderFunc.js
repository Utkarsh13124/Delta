let greet = function(){
    console.log("Hello");
}

// suppose we want to print hello 4 times
greet();
greet();
greet();
greet();

// lets do this with higher order functiom
function multipleGreet( func , count){
    for(let i = 0 ; i < count ; i++){
        func();
    }
}

multipleGreet(greet , 4);

// ! Error
multipleGreet(greet() , 4);// Gives error , we are not passing any value , we are doing some work.

// here multipleGreet is higher order function

// also we could pass a function directly, like second part only.
// let greet = function(){
//     console.log("Hello");
// }
multipleGreet(function() {console.log("Namaste!")} , 4);




// * Concept - 2
// returns a function.
// Factory functions are those function which returns a new function.
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }

        return odd;
    }else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
        
    } else {
        console.log("Invalid request");
    }
}

let odd = oddOrEvenFactory("odd");
// now odd is storing the odd function.