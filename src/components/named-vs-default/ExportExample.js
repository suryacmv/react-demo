
import React from 'react'

const DefaultExport = () => {
    return (<div>
        <h1>Default Export</h1>
        <p>default exports can be importented with any name. </p>
    </div>
    )
}
export default DefaultExport;

export const But = () => {
    return <>
        <h2>But,</h2>
    </>
}

export const NamedExport = () => {
    return <div>
        <h2>Named Export</h2>
        <p>Named Exports should be imported with same name in <code>{"{ }"}</code> braces</p>
    </div>
}


