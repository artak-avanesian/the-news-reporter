import React from 'react'
import './PopularNewsArticle.css'
import { Link } from 'react-router-dom'

const PopularNewsArticle = ({
    date,
    popular_title,
    popular_id,
}) => {
    return (
        <div className='popular-article'>
            <p className="date">{date}</p>
            <p className="popular-description">{popular_title} <Link to={`popular-news/${popular_id}`} className='popular-read-more'>Read more</Link></p>
        </div>
    )
}

export default PopularNewsArticle