import React from 'react'
import newsMenuScienceList, { getNewsMenuScienceMap } from './../newsMenuScienceList'

const NewsMenuScienceArticlePage = ({
    match,
    scienceMap = getNewsMenuScienceMap(newsMenuScienceList)
}) => {
    return (
        <article className='news-menu-science-article-page'>
            <div className={scienceMap[match.params.newsMenuScienceId].newsMenuScienceImg}></div>
            <h2>{scienceMap[match.params.newsMenuScienceId].newsMenuScienceTitle}</h2>
            {
                scienceMap[match.params.newsMenuScienceId].newsMenuScienceArticle.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))
            }
        </article>
    )
}

//css properties locate in NewsMenuWorldNewsArticlePage.css

export default NewsMenuScienceArticlePage