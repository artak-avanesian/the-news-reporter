import React from 'react'
import './NewsMenuEntertainmentArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuEntertainmentArticle = ({
    newsMenuEntertainmentTitle,
    newsMenuEntertainmentImg,
    newsMenuEntertainmentId
}) => {
    return (
        <article className='news-menu-entertainment-article'>
            <div className={newsMenuEntertainmentImg}></div>
            <Link to={`news-menu/entertainment/${newsMenuEntertainmentId}`}>
                <h5>{newsMenuEntertainmentTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuEntertainmentArticle