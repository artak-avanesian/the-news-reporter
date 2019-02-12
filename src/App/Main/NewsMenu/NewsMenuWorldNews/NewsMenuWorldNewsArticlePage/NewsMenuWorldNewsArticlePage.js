import React from 'react'
import newsMenuWorldNewsArticles, { getNewsMenuWorldNewsMap } from './../newsMenuWorldNewsArticles'
import './NewsMenuWorldNewsArticlePage.css'

const NewsMenuWorldNewsArticlePage = ({
    match,
    worldNewsMap = getNewsMenuWorldNewsMap(newsMenuWorldNewsArticles)
}) => {
    return (
        <article className='news-menu-world-news-article-page'>
            <div className={worldNewsMap[match.params.newsMenuWorldNewsId].newsMenuWorldNewsImg}></div>
            <h2>{worldNewsMap[match.params.newsMenuWorldNewsId].newsMenuWorldNewsTitle}</h2>
            <p>{worldNewsMap[match.params.newsMenuWorldNewsId].newsMenuWorldNewsArticle}</p>
        </article>
    )
}

export default NewsMenuWorldNewsArticlePage