import React from 'react'
import './NewsMenuWorldNewsArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuWorldNewsArticle = ({
    newsMenuWorldNewsTitle,
    newsMenuWorldNewsImg,
    newsMenuWorldNewsId
}) => {
    return (
        <article className='news-menu-world-news-article'>
            <div className={newsMenuWorldNewsImg}></div>
            <Link to={`/news-menu/world-news/${newsMenuWorldNewsId}`}>
                <h5>{newsMenuWorldNewsTitle}</h5>
            </Link>
        </article>
    )
}

export default NewsMenuWorldNewsArticle