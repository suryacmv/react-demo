

import React from 'react'
import Greet, { PropsDestructure, PropsChildren } from './Greet';

const PassingPropsEx = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Greet name='Surya, ' />
            <Greet name='Chandra, ' />
            <PropsDestructure name='Vegu, ' />
            <h1>Children props</h1>
            <PropsChildren name='Hemani' >
                <ol style={{ color: "lightblue" }}>
                    <li>This is children property, it can be accessed using props.children in <code>curly braces {"{}"}</code> </li>
                    <li>props are immutable and cannot be changed.</li>
                </ol>

            </PropsChildren>
            <hr />
        </div>
    )
}

export default PassingPropsEx