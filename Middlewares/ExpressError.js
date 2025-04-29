class ExpressError extends Error { // inheritance , Error class ke ander jo bhi properties hi , wo sab ExpressErrors me aa jayegi.
    constructor(status , message){
        super(); // calling constructor of Parent.
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError; // Exporting our custom class. , For using it , you need to require.

