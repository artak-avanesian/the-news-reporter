import React from 'react'
import newsMenuTechList, { getNewsMenuTechMap } from './../newsMenuTechList'

const NewsMenuTechArticlePage = ({
    match,
    techMap = getNewsMenuTechMap(newsMenuTechList)
}) => {
    return (
        <article className='news-menu-tech-article-page'>
            <div className={techMap[match.params.newsMenuTechId].newsMenuTechImg}></div>
            <h2>{techMap[match.params.newsMenuTechId].newsMenuTechTitle}</h2>
            {
                techMap[match.params.newsMenuTechId].newsMenuTechArticle.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))
            }
        </article>
    )
}

//css properties locate in NewsMenuWorldNewsArticlePage.css

export default NewsMenuTechArticlePage