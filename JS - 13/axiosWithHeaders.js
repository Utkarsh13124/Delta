/*
    hum headers ka objecct bnayaege
    jisme headers key hoga aur value ek aur object hoga jo saare key value pair contain krega headers ke value ki. 

    phir humhe use as a second argument pass krna padega apne axios function me 

    */

    const url = "https://icanhazdadjoke.com/";

    async function getJookes(){
        try{
            const config = { headers : {Accept : "application/json" }}; // from documentation of API , we get details of parameter for desirable change, Documentation hum AI se padwa sakte hi.
            let res = await axios.get(url , config);
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }