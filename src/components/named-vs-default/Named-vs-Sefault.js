import React from 'react'
import MyExport, { But, NamedExport } from './ExportExample'

export const ExportExample = () => {
    return (
        <div>
            <MyExport />
            <But />
            <NamedExport />
            <hr />
        </div>
    )
}

