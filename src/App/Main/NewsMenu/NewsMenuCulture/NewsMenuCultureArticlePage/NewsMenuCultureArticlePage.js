import React from 'react'
import newsMenuCultureList, { getNewsMenuCultureMap } from './../newsMenuCultureList'

const NewsMenuCultureArticlePage = ({
    match,
    cultureMap = getNewsMenuCultureMap(newsMenuCultureList)
}) => {
    return (
        <article className='news-menu-culture-article-page'>
            <div className={cultureMap[match.params.newsMenuCultureId].newsMenuCultureImg}></div>
            <h2>{cultureMap[match.params.newsMenuCultureId].newsMenuCultureTitle}</h2>
            {
                cultureMap[match.params.newsMenuCultureId].newsMenuCultureArticle.map((paragraph, i) => (<p key={i}>{paragraph}</p>))
            }
        </article>
    )
}

//css properties locate in NewsMenuWorldNewsArticlePage.css

export default NewsMenuCultureArticlePage