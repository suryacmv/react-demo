

// import React from 'react'

import { useState } from "react";

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loggedIn = <>
        <p>Welcome to React!!!</p>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </>

    const guest = <div>
        <p>Please loggin</p>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>


    return (
        <div>
            {isLoggedIn ? loggedIn : guest}
            <hr />
        </div>
    )
}

export default ConditionalRendering