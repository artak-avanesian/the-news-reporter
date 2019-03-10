import React from 'react'
import newsMenuMoviesList, { getNewsMenuMoviesMap } from './../newsMenuMoviesList'
import './NewsMenuMoviesArticlePage.css'

const NewsMenuMoviesArticlePage = ({
    match,
    moviesMap = getNewsMenuMoviesMap(newsMenuMoviesList)
}) => {
    return (
        <article className='news-menu-movies-article-page'>
            <div className={moviesMap[match.params.newsMenuMoviesId].newsMenuMoviesImg}></div>
            <h2>{moviesMap[match.params.newsMenuMoviesId].newsMenuMoviesTitle}</h2>
            {
                moviesMap[match.params.newsMenuMoviesId].newsMenuMoviesArticle.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))
            }
        </article>
    )
}

export default NewsMenuMoviesArticlePage