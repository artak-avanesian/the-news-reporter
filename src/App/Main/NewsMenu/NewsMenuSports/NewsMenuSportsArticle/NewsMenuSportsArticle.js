import React from 'react'
import './NewsMenuSportsArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuSportsArticle = ({
    newsMenuSportsTitle,
    newsMenuSportsImg,
    newsMenuSportsId
}) => {
    return (
        <article className='news-menu-sports-article'>
            <div className={newsMenuSportsImg}></div>
            <Link to={`news-menu/sports/${newsMenuSportsId}`}>
                <h5>{newsMenuSportsTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuSportsArticle