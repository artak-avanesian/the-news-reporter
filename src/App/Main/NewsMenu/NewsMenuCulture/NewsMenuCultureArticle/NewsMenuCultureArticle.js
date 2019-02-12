import React from 'react'
import './NewsMenuCultureArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuCultureArticle = ({
    newsMenuCultureTitle,
    newsMenuCultureImg,
    newsMenuCultureId
}) => {
    return (
        <article className='news-menu-culture-article'>
            <div className={newsMenuCultureImg}></div>
            <Link to={`news-menu/culture/${newsMenuCultureId}`}>
                <h5>{newsMenuCultureTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuCultureArticle