import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
// import logo from '../assets/img/imgSoja.jpg'
const Layout = () => { 

    return (
        <>
            <div className='container'>
                <Outlet />
            </div>

        </>
    )
}

export default Layout