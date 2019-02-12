import React from 'react'
import './NewsMenuMusicArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuMusicArticle = ({
    newsMenuMusicTitle,
    newsMenuMusicImg,
    newsMenuMusicId
}) => {
    return (
        <article className='news-menu-music-article'>
            <div className={newsMenuMusicImg}></div>
            <Link to={`news-menu/music/${newsMenuMusicId}`}>
                <h5>{newsMenuMusicTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuMusicArticle