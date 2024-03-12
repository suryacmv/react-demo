

import React from 'react'

const Greet = (props) => {
    return (
        <>
            <div>Hello {props.name}</div>
            {props.children}
        </>
    )
}
// --- OR --- Props Destructuring | {name} from props.
export const PropsDestructure = ({ name }) => {
    return (
        <>
            <div>Hello {name}</div>
        </>
    )
}

// 
export const PropsChildren = (props) => {
    return (
        <>
            <div> {props.Greetname}</div>
            {props.children}
        </>
    )
}

export default Greet