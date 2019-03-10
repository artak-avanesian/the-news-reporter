import React from 'react'
import articlesBlock, { getWorldNewsMap } from '../Articles/articlesBlock'
import './WorldNewsPage.css'

const WorldNewsPage = ({
    articleItem = getWorldNewsMap(articlesBlock),
    match
}) => {
    return (
        <article className='world-news-item'>
            <div className={articleItem[match.params.worldNewsArticleId].img}/>
            <h2>{articleItem[match.params.worldNewsArticleId].title}</h2>
            {
                articleItem[match.params.worldNewsArticleId].world_news_article.map((paragraph, i) => (<p key={i}>{paragraph}</p>))
            }
        </article>
    )
}

export default WorldNewsPage