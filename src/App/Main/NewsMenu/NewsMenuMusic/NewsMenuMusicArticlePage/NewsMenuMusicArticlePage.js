import React from 'react'
import newsMenuMusicList, { getNewsMenuMusicMap } from './../newsMenuMusicList'

const NewsMenuMusicArticlePage = ({
    match,
    musicMap = getNewsMenuMusicMap(newsMenuMusicList)
}) => {
    return (
        <article className='news-menu-music-article-page'>
            <div className={musicMap[match.params.newsMenuMusicId].newsMenuMusicImg}></div>
            <h2>{musicMap[match.params.newsMenuMusicId].newsMenuMusicTitle}</h2>
            <p>{musicMap[match.params.newsMenuMusicId].newsMenuMusicArticle}</p>
        </article>
    )
}

//css properties locate in NewsMenuMoviesArticlePage.css

export default NewsMenuMusicArticlePage