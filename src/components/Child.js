import React, { useState } from "react";

let Child = ({setIsLoggedIn}) => {
    
   

    function handleSubmit(e){
        e.preventDefault()
        setIsLoggedIn(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="name">Username :</label><br></br>
                <input type="text" id="name"/><br></br>
                <label for='pass'>Password :</label><br></br>
                <input type="password" id="pass"/><br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Child