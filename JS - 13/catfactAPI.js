// index2

let button = document.querySelector("button");
let para = document.querySelector("#fact");

let url = "https://catfact.ninja/fact";
let dogUrl = "https://dog.ceo/api/breeds/image/random";

async function getDogImage() { // jis function se call krenge usme async await use kr lenge to hume return wali cheez milegi , else promise milega.
    try {
        let res = await axios.get(dogUrl);
        console.log(res.data.message);
        return res.data.message;
        // return res.data.fact; 
    } catch (e) {
        return "/"; // returning a blank url
    }
}

button.addEventListener('click' , async () =>{
    let link = await getDogImage();
    let img = document.querySelector("img");
    img.setAttribute("src" , link);
});





// async function getCatFactusingAxios() { // jis function se call krenge usme async await use kr lenge to hume return wali cheez milegi , else promise milega.
//     try {
//         let res = await axios.get(url);
//         return res.data.fact; 
//     } catch (e) {
//         return "No fact found.";
//     }
// }

// button.addEventListener('click' , async () =>{
//     let fact = await getCatFactusingAxios();
//     // console.log(fact);
//     // fact
//     //     .then((msg)=>{
//     //         para.innerText += "\n\n" + msg;
//     //     })
//     //     .catch((err) =>{
//     //         para.innerText += "\n\n" + err;
//     //     })
//     para.innerText += "\n\n" + fact;
// });

// // without async await , getCatfact returns a promise , because not waiting for api to fetch result.
// button.addEventListener('click' , () =>{
//     let fact = getCatFactusingAxios();
//     console.log(fact);
//     fact
//         .then((msg)=>{
//             para.innerText += "\n\n" + msg;
//         })
//         .catch((err) =>{
//             para.innerText += "\n\n" + err;
//         })
//     // para.innerText += "\n\n" + fact;
// });

