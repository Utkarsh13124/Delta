const object = {
    message : "Hello",

    logMessage(){
        console.log(this.message);
    }
}

setTimeout( object.logMessage , 1000);