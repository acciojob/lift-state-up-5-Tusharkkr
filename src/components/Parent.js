import React from "react";
import Child from "./Child";

let Parent = () => {

    let [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>

            <Child
                setIsLoggedIn={setIsLoggedIn}
            />
            {isLoggedIn && <h1>You are logged in!</h1>}
        </div>
    )
}

export default Parent