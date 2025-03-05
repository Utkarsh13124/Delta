// Events are signals that something has happened,
// hum uske base pr kuch kaam kra sakte hi.

// triggered by user input or our website action.

//!Method 1
// inline me onclick se hum events ko inline html ke ander hi handle krte hi. 

//!Method 2 , drawback hum ek baar me ek hi function alot kr sakte hi ek event ko.
    // btn.onclick = sayHeelo;
    // btn.onclick = sayHeelo2;
    // only  the last aloteed value done
1. onclick event; 
2. onmuseenter property --> when mouse entered into the area 

// //!Method 3 Event listeners --> multiple cheeze kr sakte hi.
btns.addEventListener("click", function() {
    console.log("Hello World");
}); // event , callback function is passed. 
btns.addEventListener("click", sayHello );
btns.addEventListener("click", sayHello2 );
//! both will run