import React from 'react'
import articlesList, { getLatestArticlesMap } from './../ArticlesList/articles_list'
import './LatestArticlePage.css'

const LatestArticlePage = ({
    match,
    latestArticle = getLatestArticlesMap(articlesList)
}) => {
    return (
        <article className='latest-article-item'>
            <div className={latestArticle[match.params.latestArticleId].lat_art_img}/>
            <h2>{latestArticle[match.params.latestArticleId].art_list_title}</h2>
            {
                latestArticle[match.params.latestArticleId].art_list_article.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))
            }
        </article>
    )
}

//some css properties locate in WorldNewsPage

export default LatestArticlePage