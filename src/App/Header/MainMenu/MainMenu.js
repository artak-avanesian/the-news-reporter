import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'

const MainMenu = () => {
    return (
        <nav className='main-menu'>
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Contact us</Link></li>
                <li><Link to="#">Subscribe</Link></li>
                <li><Link to='/favourites'>Favourites</Link></li>
                <li><Link to="#">Login</Link></li>
            </ul>
        </nav>
    )
}

export default MainMenu