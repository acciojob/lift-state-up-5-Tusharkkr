
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {

   let [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
        <Child
        setIsLoggedIn ={setIsLoggedIn}
        />
        {isLoggedIn && <p>You are logged in!</p> }
    </div>
  )
}

export default App
