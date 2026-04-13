import React, { useState } from "react";
import Child from "./Child";

let Parent = () => {

    let [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
            <h1>Parent Component</h1>
            {isLoggedIn && <p>You are logged in!</p> || <Child
                setIsLoggedIn={setIsLoggedIn}
            />}
            
        </div>
    )
}

export default Parent