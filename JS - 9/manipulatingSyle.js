/* 2nd way :- 
    obj.style --> gives object to style
        ! sets inline property. 
            Thus mostly we not use it, we use classList property.
        obj.style print krwane pr ye humhe css file ki styling show nhi krta hi.

    obj.style.color = "red";
    obj.color.backgroundColor = "blue";
    * CAMEL CASE
*/


//! ClassList
/*
    3rd way :- 
    obj.classList
        gives list of classes that the element have. 
        ! we use it to add, remove, toggle class.

        obj.classList.add("className"); to  add a class.
            for changes we make a class , then add it . 

        obj.classList.remove("className"); to remove a class.

        obj.classList.contains("className");
            return true or false;

        classList.toggle() 
            to togglebetween add or remove.  
            first it checks that class exist , if yes remove it, if not add it.
            also return true & false denoting add & removal.

            css me jo styling upar aa rhi hi uski higher priority hi. 
*/          