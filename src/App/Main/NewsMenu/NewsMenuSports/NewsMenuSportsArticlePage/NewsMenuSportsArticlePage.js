import React from 'react'
import newsMenuSportsList, { getNewsMenuSportsMap } from './../newsMenuSportsList'


const NewsMenuSportsArticlePage = ({
    match,
    sportsMap = getNewsMenuSportsMap(newsMenuSportsList)
}) => {
    return (
        <article className='news-menu-sports-article-page'>
            <div className={sportsMap[match.params.newsMenuSportsId].newsMenuSportsImg}></div>
            <h2>{sportsMap[match.params.newsMenuSportsId].newsMenuSportsTitle}</h2>
            {
                sportsMap[match.params.newsMenuSportsId].newsMenuSportsArticle.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))
            }
        </article>
    )
}

//css properties locate in NewsMenuWorldNewsArticlePage.css

export default NewsMenuSportsArticlePage