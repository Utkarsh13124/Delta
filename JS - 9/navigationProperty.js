/*
    we can navigate for an element
    like printing his parent , child , previous element sibling / next element sibling

    Parent always one , children could be many. 
    for childdren it return collection. 

 */

    let h4 = document.querySelector('h4');
    console.log(h4.parentElement)
    console.log(h4.children); // return collection
    console.log(h4.childElementCount); // return count of children

    // obj.previousElementSibling