import React from 'react'
import desk_articles, { getDeskArticlesMap } from './../DeskArticles/desk_articles'
import './DeskArticlePage.css'

const DeskArticlePage = ({
    match,
    deskArticle = getDeskArticlesMap(desk_articles)
}) => {
    return (
        <article className='desk-article-item'>
            <div className={deskArticle[match.params.deskArticleId].desk_art_img}/>
            <h2>{deskArticle[match.params.deskArticleId].desk_art_title}</h2>
            <p>{deskArticle[match.params.deskArticleId].desk_art_article}</p>
        </article>
    )
}

//some css properties locate in WorldNewsPage

export default DeskArticlePage