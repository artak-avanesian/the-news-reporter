import React from 'react'
import { Link } from 'react-router-dom'
import './AllPopularNewsArticles.css'

export default ({
    popular_title,
    popular_link
}) => (
    <div className='all-popular-news-articles'>
        <div className='noImg'>no-image</div>
        <Link to={popular_link}>
            <h5>{popular_title}</h5>
        </Link>
    </div>
)