import React from 'react'
import './NewsMenuBusinessArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuBusinessArticle = ({
    newsMenuBusinessTitle,
    newsMenuBusinessImg,
    newsMenuBusinessId
}) => {
    return (
        <article className='news-menu-business-article'>
            <div className={newsMenuBusinessImg}></div>
            <Link to={`/news-menu/business/${newsMenuBusinessId}`}>
                <h5>{newsMenuBusinessTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuBusinessArticle