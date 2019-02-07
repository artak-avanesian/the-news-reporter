import React from 'react'
import articlesBlock, { getWorldNewsMap } from '../Articles/articlesBlock'
import './WorldNewsPage.css'

const WorldNewsPage = ({
    articleItem = getWorldNewsMap(articlesBlock),
    match
}) => {
    return (
        <article className='world-news-item'>
            <img src={articleItem[match.params.worldNewsArticleId].img_src} alt=""/>
            <h2>{articleItem[match.params.worldNewsArticleId].title}</h2>
            <p>{articleItem[match.params.worldNewsArticleId].world_news_article}</p>
        </article>
    )
}

export default WorldNewsPage