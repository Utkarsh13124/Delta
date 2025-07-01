import { useState } from "react"

export default function Form(){
   // Single state object for all form data
    let [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: ""
    });

    // Common handler for all inputs
    let handleInputChange = (event) => {
        const { name, value } = event.target; // hume name attribute ko define krna padega in input elements, wo bhi same name ke jaise object ki key hi ,kyuki hum unhe key ke roop me use krne wale hi.
        
        setFormData(prevData => ({
            ...prevData,
            [name]: value  // Computed property name
        }));
    }
//! [name] → computed property name syntax.
// Without brackets, it treats name as literal key, not its value.

    // Handle form submission
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
        setFormData({
        fullname: "",
        username: "",
        password: ""
    })
    }


    return (
   <div>
       <h2>Registration Form</h2>
       <form onSubmit={handleSubmit}>
           <div>
               <label htmlFor="fullname">Full Name</label>
               <input 
                   type="text" 
                   id="fullname"  // for html for
                   name="fullname" // for backened & handling changes.
                   value={formData.fullname} 
                   onChange={handleInputChange} 
                   placeholder="Enter full name"
               />
           </div>

           <div>
               <label htmlFor="username">Username</label>
               <input 
                   type="text" 
                   id="username" 
                   name="username"
                   value={formData.username} 
                   onChange={handleInputChange} 
                   placeholder="Enter username"
               />
           </div>

           <div>
               <label htmlFor="password">Password</label>
               <input 
                   type="password" 
                   id="password" 
                   name="password"
                   value={formData.password} 
                   onChange={handleInputChange} 
                   placeholder="Enter password"
               />
           </div>

           <button type="submit">Submit</button>
       </form>

   </div>
)
}