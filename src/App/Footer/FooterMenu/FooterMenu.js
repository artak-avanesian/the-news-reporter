import React from 'react'
import { Link } from 'react-router-dom'
import './FooterMenu.css'

const FooterMenu = () => {
    return (
        <nav>
            <ul className="footer-menu">
                <li><Link to="/world-news">World News</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/tech">Technology</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/culture">Culture</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/music">Music</Link></li>
            </ul>
        </nav>
    )
}

export default FooterMenu