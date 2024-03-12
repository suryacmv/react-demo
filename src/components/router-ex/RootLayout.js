
import { Output } from '@mui/icons-material'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <div>header with root-layout</div>
            <hr />
            <Outlet />
        </>
    )
}

export default RootLayout