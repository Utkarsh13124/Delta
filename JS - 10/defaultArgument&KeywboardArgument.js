let btn = document.querySelector('button');

btn.addEventListener('click', function(evt) {
    // ! default pointer/mouse event
    console.log(evt);
});

// keyboardEvent
    // like hum kuch type kr rhe hi , text box tab trigger ho rhA hi 
    // keydown -> when key is pressed
    // keyup whenkey is released

    // keydown work for any key , deelete up , down , etc.

    // keyboard object
        // code :- code of particular key. // code of ; Semicolon
        // key :- screen ke upar visible // key is ";"