import React from 'react'
import './NewsMenuMoviesArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuMoviesArticle = ({
    newsMenuMoviesTitle,
    newsMenuMoviesImg,
    newsMenuMoviesId
}) => {
    return (
        <article className='news-menu-movies-article'>
            <div className={newsMenuMoviesImg}></div>
            <Link to={`news-menu/movies/${newsMenuMoviesId}`}>
                <h5>{newsMenuMoviesTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuMoviesArticle