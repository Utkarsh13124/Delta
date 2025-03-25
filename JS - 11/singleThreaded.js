/*
    JS is single threaded.
     el samay pr ek hi cheez run hoti hi. 


    Issue  in single threaded ?
        suppose ki humhe koi api req bhejni hi. aur use ane me delay ho rha hi , so we cant wait for long time, 

    solution is callback pass krna 
        jab humhe aise work krane ho ki api se data aayega tab hum ye krenge. un cases me callback pass kr sakte hi.
      setTimeout bhi use kr ssakte hi.
        JS settimeout ka wait krta hi.
            but kaise krega ye. 
                ye kaam JS nhi kr rha hi , ye kaam browser se krwa rha hi.
                 ab browser kaise krega ?
                    browser multithreaded hi, wo wait krega, jab wait complete hoga to wo use JS ke callstack me lake rakh dega, JS dekhega arey mere callstack me to ye function hi , JS use implement kr dega.
                     ultimately waiting wala kaam Browser kr rha  hi.
*/

/*
    Synchronous --> code line by line chl rha hi.
    Asynchronous --> code me ups and downs bhi hi.
*/


