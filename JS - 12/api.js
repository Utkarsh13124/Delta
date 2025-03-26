/*
    Application progrramming interface
    user server ko access nhi krta hi, api ko access krta hi.

    2 software communicate with api.
    but jo api , http ka use krke internet se interact krwati hi wo WEB API hi .
    
    Api Returns data in JSON form as every time we may not need the HTML , CSS , JS.
        like we are sending a search query, .

    API is basically a URL , a LINK , a ENDPOINT.

 */

/*
    url --> normal api no key , no password
    few api have key , few have password and key both.

    GENERALLY api ke saath unka documentation hoti hi.
        documentation padke api ko samajhna is a good practice. as each api have some differences to use.

*/

/*
    JSON 
        pehle hum XML format ko usage krte the

        JSON koi language ya JS pe dependent  nhi hi. 
*/

/*
    ! 2 important function 
        1. JSON.parse( data ) 
            to parse a string data into JS object. 
            jo humara data API se ata hi wo string form me ata hi
            use parse krne ke liye  JSON.parse() use hota hi

            we parse because we cannot fetch information from JSOn but from JS object we can.

        2. JSON.stringify( json )
            JSON data is an string so it returns a string.
            to parse a JS object into JSON

            generally we used while making our API.



*/

/*
    ! Testing of API
        1. Hoppscoth --> online , nosignup needed.
        2. Postman
*/

let jsonReq = `{"fact":"The first cat show was in 1871 at the Crystal Palace in London.","length":63}`;

let validRes = JSON.parse(jsonReq);
console.log(validRes);

let student = {
    name : "Utkarsh",
    marks : 97
}

let parseData = JSON.stringify(student); // 
