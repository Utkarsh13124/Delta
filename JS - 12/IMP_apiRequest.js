//! index2.html
/*
    fetch is used to send API request. 
    it returns a promise means we can apply then , catch .

    ! fetch se call kiye hi , agar api kuch bhi header return krti hi , then humhara promise resolve ho jaayega.
        might be we may not get the final result
        for finalresult we  convert it into json format by res.json() method
         that again returs a promise
         on this Json data we can do our work

         ! API calls are asynchronus , agar neeche kkoi code likha hua hi , to tab tk wo chalengi , jaise hi api ka data hi , wo print ho jayegi.   

*/
let url = "https://catfact.ninja/fact";

fetch(url)
    .then( (res)=>{
        console.log(res);
        return res.json(); // parsing the data
    })
    .then( (data)=>{
        console.log(data);
        console.log(data.fact);
    })
    .catch((err)=>{
        console.log("Error - " , err);
    });


/*
! Using fethc with async and await

*/

let url2 = "https://catfact.ninja/fact";

async function getFacts(){
    // let res1 =  fetch(url);
    // let data1 =  res1.json();
    // console.log("data1 - ", data1.fact);
        //! upar wale me humne await  nhi use kiya hi , to direct console.log() chalega agar tab tk api se fetch , ya parse nhi  hua hoga , to , pending state , undefined print ho sakta hi.
        //! so we use await.

    try {
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1 - ", data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 - ", data2.fact);
    } catch (err) {
        console.log("error : - " , err);
    }

}
