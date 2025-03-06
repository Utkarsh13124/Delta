// jab hum nested element pr click rte hi, tab uske parents ke eventlistener bhi activate ho jayenge. 
// this phenomenon is called event bubbling.

//! app.js me code kiya hi isko.

//! stop propagation is used to  stop it.


//! event delegation
    /* Jab hum kisi cheez pr events listners lagaye hi aur wo cheez bad me aur create hui , like ul task in todo app , tab un pr delete button kaam nhi kr rha tha , kyuki us delete pr event nhi laga tha
    whi pehle wale delete ke upar hum already delete laga chuke the.
    
    isko even delegation khete hi.
    
    isse bachne ke liye event bubbling ka use krenge, hum uske parent ke upar listnere lagayenge, 
    event.target.nodeName se hum use select kr lenge. */