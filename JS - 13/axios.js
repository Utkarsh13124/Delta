/*
    axios is used for sending HTTP request , that internally use fetch, but  it is more compact.
    ! CDN LINK of Axios :- <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
 
    Why we need axios ?
        because fetch se jo data aa rha tha wo direct readable form me nhi tha use parse krna padta tha. 
        but axios  se direct JSON data ata hi

        here we need to aware 
            axios.get(url);

            jo data ata hi, first print it , see it , ki kaise key - value  pair hi
    */



let url = "https://catfact.ninja/fact";

async function getFactsUsingAxios(){
    try {
        let res1 = await axios.get(url);
        
        console.log("data1 - ", res1);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 - ", data2.fact);
    } catch (err) {
        console.log("error : - " , err);
    }

}
// async function getFacts(){
//     // let res1 =  fetch(url);
//     // let data1 =  res1.json();
//     // console.log("data1 - ", data1.fact);
//         //! upar wale me humne await  nhi use kiya hi , to direct console.log() chalega agar tab tk api se fetch , ya parse nhi  hua hoga , to , pending state , undefined print ho sakta hi.
//         //! so we use await.

//     try {
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log("data1 - ", data1.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data2 - ", data2.fact);
//     } catch (err) {
//         console.log("error : - " , err);
//     }

// }
