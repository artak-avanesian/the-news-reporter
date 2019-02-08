import React from 'react'
import { Link } from 'react-router-dom'
import './NewsMenu.css'

const NewsMenu = () => {
    return (
        <nav>
            <ul className='news-menu'>
                <li><Link to="/world-news">World news</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/tech">Tech</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/culture">Culture</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/classifieds">Classifieds</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
            </ul>
        </nav>
    )
}

export default NewsMenu