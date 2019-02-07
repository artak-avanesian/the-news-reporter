import React from 'react'
import './NewsMenuWorldNewsArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuWorldNewsArticle = ({
    newsMenuWorldNewsTitle,
}) => {
    return (
        <div>
            <div className="news-menu-world-news-image"></div>
            <Link to=''>
                <h5 className="news-menu-world-news-description">{newsMenuWorldNewsTitle}</h5>
            </Link>
        </div>
    )
}

export default NewsMenuWorldNewsArticle