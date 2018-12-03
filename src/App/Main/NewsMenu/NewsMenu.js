import React from 'react'
import './NewsMenu.css'

const NewsMenu = () => {
    return (
        <nav>
            <ul className='news-menu'>
                <li><a href="#">World news</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Entertainment</a></li>
                <li><a href="#">Culture</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Classifieds</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>
        </nav>
    )
}

export default NewsMenu