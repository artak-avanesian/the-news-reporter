import React from 'react'
import { Link } from 'react-router-dom'
import './NewsMenuScienceArticle.css'

const NewsMenuScienceArticle = ({
    newsMenuScienceTitle,
    newsMenuScienceImg,
    newsMenuScienceId
}) => {
    return (
        <article className='news-menu-science-article'>
            <div className={newsMenuScienceImg}></div>
            <Link to={`/news-menu/science/${newsMenuScienceId}`}>
                <h5>{newsMenuScienceTitle}</h5>
            </Link>
        </article>
    )
}

//some css properties locate in NewsMenuWorldNewsArticle.css

export default NewsMenuScienceArticle