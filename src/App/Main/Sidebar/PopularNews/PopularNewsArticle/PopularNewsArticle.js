import React from 'react'
import './PopularNewsArticle.css'

const PopularNewsArticle = ({
    date,
    popular_title,
}) => {
    return (
        <div className='popular-article'>
            <p className="date">{date}</p>
            <p className="popular-description">{popular_title} <a href="" className='popular-read-more'>Read more</a></p>
        </div>
    )
}

export default PopularNewsArticle