import React from 'react'
import articlesList, { getLatestArticleItem } from './../ArticlesList/articles_list'
import './LatestArticlePage.css'

const LatestArticlePage = ({
    match,
    latestArticle = getLatestArticleItem(articlesList)
}) => {
    return (
        <article className='latest-article-item'>
            <div className={latestArticle[match.params.latestArticleId].lat_art_img}/>
            <h2>{latestArticle[match.params.latestArticleId].art_list_title}</h2>
            <p>{latestArticle[match.params.latestArticleId].art_list_article}</p>
        </article>
    )
}

//some css properties locate in WorldNewsPage

export default LatestArticlePage