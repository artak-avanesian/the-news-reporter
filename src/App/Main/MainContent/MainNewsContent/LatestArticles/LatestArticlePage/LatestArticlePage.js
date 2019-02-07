import React from 'react'
import articlesList, { getLatestArticleItem } from './../ArticlesList/articles_list'

const LatestArticlePage = ({
    match,
    latestArticle = getLatestArticleItem(articlesList)
}) => {
    return (
        <article className='latest-article-item'>
            <img src={latestArticle[match.params.latestArticleId].lat_art_img_src} alt=""/>
            <h2>{latestArticle[match.params.latestArticleId].art_list_title}</h2>
            <p>{latestArticle[match.params.latestArticleId].art_list_article}</p>
        </article>
    )
}

export default LatestArticlePage