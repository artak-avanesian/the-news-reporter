import React from 'react'
import './MainMenu.css'

const MainMenu = () => {
    return (
        <nav className='main-menu'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default MainMenu