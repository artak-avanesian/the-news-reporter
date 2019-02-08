import React from 'react'
import desk_articles, { getDeskArticlesMap } from './../DeskArticles/desk_articles'

const DeskArticlePage = ({
    match,
    deskArticle = getDeskArticlesMap(desk_articles)
}) => {
    return (
        <article className='desk-article-item'>
            <img src={deskArticle[match.params.deskArticleId].desk_art_img_src} alt=""/>
            <h2>{deskArticle[match.params.deskArticleId].desk_art_title}</h2>
            <p>{deskArticle[match.params.deskArticleId].desk_art_article}</p>
        </article>
    )
}

//css properties locate in WorldNewsPage

export default DeskArticlePage