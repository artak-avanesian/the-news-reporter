import React from 'react';
import {Link} from 'react-router-dom'
import './Logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <Link to='/' className='home'><p className='logo-title'>The <br/> <span className="logo-news">News <span>Reporter</span></span></p></Link>
        </div>
    )
}

export default Logo