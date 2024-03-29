import React from 'react'
import newsMenuBusinessList, { getNewsMenuBusinessMap } from './../newsMenuBusinessList'

const NewsMenuBusinessArticlePage = ({
    match,
    businessMap = getNewsMenuBusinessMap(newsMenuBusinessList)
}) => {
    return (
        <article className='news-menu-business-article-page'>
            <div className={businessMap[match.params.newsMenuBusinessId].newsMenuBusinessImg}></div>
            <h2>{businessMap[match.params.newsMenuBusinessId].newsMenuBusinessTitle}</h2>
            {
                businessMap[match.params.newsMenuBusinessId].newsMenuBusinessArticle.map((paragraph, i) => (<p key={i}>{paragraph}</p>))
            }
        </article>
    )
}

//css properties locate in NewsMenuWorldNewsArticlePage.css

export default NewsMenuBusinessArticlePage