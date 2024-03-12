

import React, { useState } from 'react'

const UseStateEx = () => {
    let [count, setCount] = useState(0)


    return (
        <div>
            <h3>useState example</h3>
            <div>
                {count}
            </div>
            <button onClick={() => {
                console.log('click event')
                return setCount(++count);
            }}>Increment</button>
            <hr />
        </div>
    )
}

export default UseStateEx