let url = "http://universities.hipolabs.com/search?name="; // this we get from documentation and when we are working at hopscotch

let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("#list");

async function getList(){
    let country = input.value;
    try {
        let res = await axios.get(url + country);
        // console.log(res.data);

        return res.data;
    } catch (e) {
        console.log("Error Caught : " , e);
        return [];
    }
}
 
 function show(colArr){
    list.innerText  = "";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;

        list.appendChild(li);
    }
 }

button.addEventListener( "click" , async ()=> {
    let colArr = await getList();
    show(colArr);
})
