import React from 'react'
import {Link} from 'react-router-dom'
import './NewsMenu.css'

const NewsMenu = () => {
    return (
        <nav>
            <ul className='news-menu'>
                <li><Link to="/world-news">World news</Link></li>
                <li><Link to="#">Sports</Link></li>
                <li><Link to="#">Tech</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Movies</Link></li>
                <li><Link to="#">Entertainment</Link></li>
                <li><Link to="#">Culture</Link></li>
                <li><Link to="#">Books</Link></li>
                <li><Link to="#">Classifieds</Link></li>
                <li><Link to="#">Blogs</Link></li>
            </ul>
        </nav>
    )
}

export default NewsMenu