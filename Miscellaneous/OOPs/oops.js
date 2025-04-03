/*

    use of OOPs 
    abhi to humare pass ek student hi hi , jaha humhe uska age, rollno, marks , subject store krwana hi , 
        to hum variable bna lete hi , ya object bna lete hi.

    but agar kl ko bhut saare student aa gye to hum sabke liye variable hi thodi na anate rhege.
    to hum baar bar marks , age jaise variable ko banayaege to humhe bar bar unhe define krna padega. 


    ab agar future me aur bhi student aayenge to unka bhi age , hoga , ye sare values honge , to hum ek template bna sakte hi.

    Class matlab inska template/blueprint banana hi. 
    isme agar hum function bnayege , to wo memory me ek hi jagah create honge aur unhe saare object use kr paayege.



Their work is to structure our Code
    ! object prototype : - 
        Prototype are the mechanism by which  JavaScript objects inherit features from one another.
        It is like  a single template object that all objects inherit methods and properties from without having their own copy.

        Every object in jS has a builtin properties , which is called prototype. 

        jo function hum alag se create krte hi , wo prototype ke ander nhi rehte hi , bahar alag e dikhte hi. console window pr dikhega.

        Jo function saare ke saare array ke paas hone chahiye  unhe hum array object ke ander daal dete hi , jo saare ke saare string ke saath hone chahiye ,  unhe hum string prototype ke ander define kr denge. 

        prototype ke function ek jagah define hote hi. 


    !arr.__proto__      (reference)
        hr ek array object jo hum create kr rhe hi , unke pass array prototype ka ek reference hota hi.

        suppose kl ko humhe push function ki definition change krni hi
        arr.__proto__.push = (n) =>{
                console.log("Punsing number : " , n);
        }

    ! acessing actual prototype object
        Array.prototype     (actual object)


! Factory function 
    A function that creates objects











*/