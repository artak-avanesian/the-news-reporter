import React from 'react'
import './NewsMenuTechArticle.css'
import {Link} from 'react-router-dom'

const NewsMenuTechArticle = ({
    newsMenuTechTitle,
    newsMenuTechImg,
    newsMenuTechId
}) => {
    return (
        <article className='news-menu-tech-article'>
            <div className={newsMenuTechImg}></div>
            <Link to={`news-menu/tech/${newsMenuTechId}`}>
                <h5>{newsMenuTechTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuTechArticle