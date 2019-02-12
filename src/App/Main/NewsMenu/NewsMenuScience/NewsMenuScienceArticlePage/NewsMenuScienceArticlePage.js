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
            <p>{scienceMap[match.params.newsMenuScienceId].newsMenuScienceArticle}</p>
        </article>
    )
}

//css properties locate in NewsMenuWorldNewsArticlePage.css

export default NewsMenuScienceArticlePage